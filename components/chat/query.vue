<script setup lang="ts">
import Database from '@/services/indexedDb';

const chatId = "12546dddww@#!@"
const { send } = useChatgpt()

const data = ref('')
const message = ref('')

async function sendMessage() {
  const response = await send(message.value)
  data.value = response

  const item = {
    id: Date.now().toString(),
    message: response
  }

  await Database.saveItem(chatId, item)
}

</script>
<template>
  <div class="border-t flex border-gray-300 w-full p-3 items-center justify-between">
    <input v-model="message" type="text" placeholder="Message"
      class="rounded-full outline-none bg-gray-100 mx-3 w-full py-2 pl-4 block focus:text-gray-700" name="message"
      required />
    <button type="submit" @click="sendMessage">
      <svg class="h-5 transform origin-center text-gray-500 w-5 rotate-90" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20" fill="currentColor">
        <path
          d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    </button>
  </div>
</template>
