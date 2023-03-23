<script setup lang="ts">
import { useDatabaseStore } from '~/stores/databaseStore'

interface Item {
  id: number
  [key: string]: any
}

const databaseStore = useDatabaseStore()
const databaseId = databaseStore.getDatabaseId
const userId = databaseStore.getUserId
await databaseStore.getAllData(databaseId)
const allResponses = databaseStore.getAllResponses

const handleWithChatStyle = (id: string) => {
  if (id === userId) {
    return 'flex justify-end'
  }

  return 'flex justify-start'
}
</script>

<template>
  <div class="grid min-h-full h-screen w-full relative">
    <div class="min-h-full w-full h-full ">
      <div class="border-b flex border-gray-300 p-3 relative items-center">
        <img class="rounded-full object-cover h-10 w-10"
             src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
             alt="username">
        <span class="font-bold ml-2 text-gray-600 block">
          {{ databaseId }}
        </span>
        <span class="rounded-full bg-green-600 h-3 top-3 left-10 w-3 absolute" />
      </div>
      <div class="h-[40rem] w-full h-auto p-6 relative overflow-y-auto">
        <ul class="space-y-8 flex flex-col">
          <li v-for="response in allResponses"
              :key="response.id"
              class="flex"
              :class="handleWithChatStyle(response.id)">
            <div class="rounded max-w-xl shadow py-2 px-4 text-gray-700 relative">
              <p>
                {{ response?.id }}
              </p>
              <span class="block">{{ response.message }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="border-gray-300 flex items-center justify-between p-3 absolute bottom-0 w-full"
    >
      <ChatQuery />
    </div>
  </div>
</template>
