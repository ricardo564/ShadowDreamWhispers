<template>
  <div class="flex h-auto w-full">
    <div class="w-full">
      <div class="border-b flex border-gray-300 p-3 relative items-center">
        <img class="rounded-full object-cover h-10 w-10"
          src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
        <span class="font-bold ml-2 text-gray-600 block">
          Emma
        </span>
        <span class="rounded-full bg-green-600 h-3 top-3 left-10 w-3 absolute"></span>
      </div>
      <div class="h-[40rem] w-full p-6 relative overflow-y-auto">
        <ul class="space-y-2">
          <li class="flex justify-start">
            <div class="rounded max-w-xl shadow py-2 px-4 text-gray-700 relative">
              <span class="block">Hi</span>
            </div>
          </li>
          <li class="flex justify-end">
            <div class="rounded max-w-xl bg-gray-100 shadow py-2 px-4 text-gray-700 relative">
              <span class="block">Hiiii</span>
            </div>
          </li>
          <li class="flex justify-end">
            <div class="rounded max-w-xl bg-gray-100 shadow py-2 px-4 text-gray-700 relative">
              <span class="block">how are you?</span>
            </div>
          </li>
          <li class="flex justify-start">
            <div class="rounded max-w-xl shadow py-2 px-4 text-gray-700 relative">
              <span class="block">
                Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div class="border-t flex border-gray-300 w-full p-3 items-center justify-between">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-gray-500 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-gray-500 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </button>

        <input type="text" placeholder="Message"
          class="rounded-full outline-none bg-gray-100 mx-3 w-full py-2 pl-4 block focus:text-gray-700" name="message"
          required />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-gray-500 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
        <button type="submit">
          <svg class="h-5 transform origin-center text-gray-500 w-5 rotate-90" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>