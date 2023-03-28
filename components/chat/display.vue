<script setup lang="ts">
import { useDatabaseStore } from '~/stores/databaseStore'

const databaseStore = useDatabaseStore()
const databaseId = databaseStore.getDatabaseId
const userId = databaseStore.getUserId
await databaseStore.getAllData(databaseId)

const handleWithChatStyle = (id: number) => {
  if (id === userId) {
    return 'flex justify-end'
  }

  return 'flex justify-start'
}
</script>

<template>
  <div class="flex flex-col h-full w-full relative">
    <div class="min-h-full w-full h-full grid">
      <div class="border-b flex border-gray-300 p-3 relative items-center h-18">
        <img
          class="rounded-full object-cover h-10 w-10"
          src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
          alt="username"
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
            :class="handleWithChatStyle(response.created_at)"
          >
            <div class="rounded max-w-xl shadow shadow-gray-400 py-2 px-4 text-gray-700 relative">
              <p>
                {{ response?.id }}
              </p>
              <span class="block">{{ response.message }}</span>
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
