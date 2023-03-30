<script setup lang="ts">
import { ref } from 'vue'
import { useDatabaseStore } from '~/stores/databaseStore'
import { startNprogress } from '~/utils/nProgress'
import type { Item } from '~/types/message'

const { send } = useChatgpt()

const databaseStore = useDatabaseStore()

const handleCreateId = () => {
  return Number(databaseStore.getAllResponsesLength + 1)
}

const message = ref('')
const loading = ref(false)
const databaseId = databaseStore.getDatabaseId
const userName = databaseStore.getUserName

const sendMessage = async function () {
  loading.value = true

  try {
    const res = await send(message.value)

    const resWithId: Item = {
      id: handleCreateId(),
      sent_by: 'AI',
      message: res,
      created_at: new Date().toISOString(),
    }

    databaseStore.saveResponse(databaseId, resWithId)
  }
  catch (err) {
    console.log(err)
  }
  finally {
    message.value = ''
    loading.value = false
  }
}

const saveQueryOnDatabase = async function () {
  startNprogress()

  loading.value = true

  const query: Item = {
    id: handleCreateId(),
    sent_by: userName,
    message: message.value,
    created_at: new Date().toISOString(),
  }

  databaseStore.saveQuery(query).then(() => {
    sendMessage()
    loading.value = false
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
      required
      autocomplete="off"
      :disabled="loading"
      @keyup.enter="saveQueryOnDatabase"
    >
    <button
      type="submit"
      :disabled="loading"
      @click="saveQueryOnDatabase"
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
