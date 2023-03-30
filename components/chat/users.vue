<script setup lang="ts">
import { onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useDatabaseStore } from '~/stores/databaseStore'

const databaseStore = useDatabaseStore()

const handleWithGetListOfDatabase = () => {
  databaseStore.getAllDatabaseInIndexedDB()
}

const databaseList = await databaseStore.getDatabaseList
console.table('databaseList: ', databaseList)
const handleCreateDatabaseId = () => {
  return uuidv4()
}

const handleWithSetDatabaseId = async (id: string) => {
  await databaseStore.setDatabaseId(id)
}

const handleWithCreateANewDatabase = async (id: string) => {
  await databaseStore.createNewDatabase(id)
}

onMounted(() => {
  handleWithSetDatabaseId('test')
  handleWithGetListOfDatabase()
})
</script>

<template>
  <div class="border-r border-gray-300 min-w-[20rem] h-full w-full md:w-1/3 relative">
    <div class="my-3 mx-3">
      <div class="text-gray-600 relative">
        <span class="flex pl-2 inset-y-0 left-0 absolute items-center">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="h-6 text-gray-300 w-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="search"
          class="rounded outline-none bg-gray-100 w-full py-2 pl-10 block"
          name="search"
          placeholder="Search"
          required
        >
      </div>
    </div>
    <div
      class="grid items-center text-center"
    >
      <Button
        class="border rounded-full border-gray-300 text-sm py-2 mx-5 transition ease-in-out duration-150 items-center hover:bg-gray-100 focus:outline-none text-center"
        label="Create a new chat"
        icon="bx bxs-message-rounded-add w-8 h-8 text-3xl bg-red-500 text-black rounded-full"
        @click="handleWithCreateANewDatabase(handleCreateDatabaseId())"
      />
    </div>
    <h2 class="my-2 text-lg mb-2 ml-2 text-gray-600 w-full text-center">
      Chats
    </h2>
    <div
      v-if="!databaseList"
      class="h-auto flex items-center justify-center"
    >
      <span class="text-gray-400 mt-16">Loading...</span>
    </div>
    <ul
      v-else
      class="h-full w-full overflow-hidden overflow-y-auto"
    >
      <li
        v-for="(item, index) in databaseList"
        :key="index"
        @click="handleWithSetDatabaseId(item)"
      >
        <a
          class="border-b cursor-pointer flex border-gray-300 text-sm py-2 px-3 transition ease-in-out duration-150 items-center hover:bg-gray-100 focus:outline-none"
        >
          <img
            class="rounded-full object-cover h-10 w-10"
            src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
            alt="username"
          >
          <div class="w-full pb-2">
            <div class="flex justify-between">
              <span class="font-semibold ml-2 text-gray-600 block">
                {{ item }}
              </span>
              <span class="text-sm ml-2 text-gray-600 block">
                25 minutes
              </span>
            </div>
            <span class="text-sm ml-2 text-gray-600 block">
              last message
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
