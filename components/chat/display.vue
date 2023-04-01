<script setup lang="ts">
import { useDatabaseStore } from '~/stores/databaseStore'

const databaseStore = useDatabaseStore()
const databaseId = databaseStore.getDatabaseId
const userName = databaseStore.getUserName
await databaseStore.getAllData(databaseId)

const handleWithChatStyle = (sentBy: string) => {
  if (sentBy === userName) {
    return 'flex justify-end'
  }

  return 'flex justify-start'
}
</script>

<template>
  <div class="flex flex-col h-full w-full relative transition-all ease-in-out animate-fade-in-from-left delay-200">
    <div class="min-h-full w-full h-full grid">
      <div class="border-b flex border-gray-300 p-3 relative items-center rounded h-[5rem]">
        <img
          class="rounded-full object-cover h-15 w-15 border-2"
          src="https://storage.googleapis.com/pai-images/84c288dea0cb45098622cb691d8e2e3b.png"
          alt="roomImage"
        >
        <span class="font-bold ml-2 text-gray-600 block">
          {{ databaseId }}
        </span>
        <span class="rounded-full h-3 top-3 left-10 w-3 absolute" />
      </div>
      <div
        class="flex flex-col h-auto w-full overflow-hidden overflow-y-auto"
      >
        <ul class="grid gap-4 overflow-x-hidden overflow-y-auto w-full h-auto p-6">
          <li
            v-for="response in databaseStore.getAllResponses"
            class="flex h-auto"
            :key="response.id"
            :class="handleWithChatStyle(response.sent_by)"
          >
            <div class="bg-white rounded-xl max-w-xl shadow shadow-gray-400 py-2 px-4 text-gray-700 relative">
              <p>
                {{ response?.sent_by }}
              </p>
              <span
                class="block whitespace-pre-wrap"
              >
                {{ response.message }}
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="border-gray-300 flex items-center justify-between p-3 bottom-0 mt-auto w-full h-18"
      >
        <ChatQuery />
      </div>
    </div>
  </div>
</template>
