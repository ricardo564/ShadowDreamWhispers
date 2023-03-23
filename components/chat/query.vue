<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { useDatabaseStore } from '~/stores/databaseStore'
import { startNprogress } from '~/utils/nProgress'

interface Item {
  id: string
  message: string
  created_at: string
}

const { send } = useChatgpt()

const handleCreateRandonId = () => {
  return uuidv4()
}

const databaseStore = useDatabaseStore()

const message = ref('')
let loading = false
const databaseId = databaseStore.getDatabaseId
const userId = databaseStore.getUserId

const saveQueryOnDatabase = async () => {
  startNprogress()
  loading = true
  const query: Item = {
    id: userId,
    message: message.value,
    created_at: new Date().toISOString(),
  }

  await databaseStore.saveQuery(databaseId, query)
    .then(() => {
      message.value = ''
      loading = false
    })
    .catch((err: any) => {
      loading = false
      console.log(err)
    })
}

const sendMessage = async () => {
  loading = true

  await send(message.value)
    .then((res: any) => {
      const resWithId: Item = {
        id: handleCreateRandonId(),
        message: res,
      }

      saveQueryOnDatabase()

      databaseStore.saveResponse(databaseId, resWithId)
      loading = false
    })
    .catch((err: any) => {
      loading = false
      console.log(err)
    })
}
</script>

<template>
  <div class="border-t flex border-gray-300 w-full h-16 p-3 items-center justify-between">
    <input
      v-model="message"
      type="text"
      placeholder="Message"
      class="rounded-full outline-none bg-gray-100 mx-3 w-full py-2 pl-4 block focus:text-gray-700"
      name="message"
      :disabled="loading"
      required
      @keyup.enter="sendMessage"
    >
    <button
      type="submit"
      :disabled="loading"
      @click="sendMessage"
    >
      <svg
        class="h-5 transform origin-center text-gray-500 w-5 rotate-90"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
        />
      </svg>
    </button>
  </div>
</template>
