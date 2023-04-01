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
  <div class="border-t flex border-gray-300 w-full h-16 p-3 items-center justify-between transition-all ease-in-out">
    <input
      v-model="message"
      type="text"
      placeholder="Message"
      class="rounded-full outline-none bg-gray-100 mx-3 w-full py-2 pl-4 block focus:text-gray-700 h-14 shadow hover:shadow-xl delay-100"
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
      <i class="bx bx-send bx-lg hover:text-red-800 animate-pop delay-50 text-shadow-lg" />
    </button>
  </div>
</template>
