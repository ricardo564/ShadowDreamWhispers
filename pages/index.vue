<template>
  <NuxtLayout name="default">
    <div class="container mx-auto">
      <div class="border rounded flex min-w-full">
        <div class="border-r border-gray-300 min-w-[20rem] w-full sm:w-1/12">
          <div class="my-3 mx-3">
            <div class="text-gray-600 relative">
              <span class="flex pl-2 inset-y-0 left-0 absolute items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  viewBox="0 0 24 24" class="h-6 text-gray-300 w-6">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <input type="search" class="rounded outline-none bg-gray-100 w-full py-2 pl-10 block" name="search"
                placeholder="Search" required />
            </div>
          </div>

          <ul class="h-[32rem] overflow-auto">
            <h2 class="my-2 text-lg mb-2 ml-2 text-gray-600">Chats</h2>
            <li>
              <a
                class="border-b cursor-pointer flex border-gray-300 text-sm py-2 px-3 transition ease-in-out duration-150 items-center hover:bg-gray-100 focus:outline-none">
                <img class="rounded-full object-cover h-10 w-10"
                  src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
                <div class="w-full pb-2">
                  <div class="flex justify-between">
                    <span class="font-semibold ml-2 text-gray-600 block">
                      Jhon Don
                    </span>
                    <span class="text-sm ml-2 text-gray-600 block">
                      25 minutes
                    </span>
                  </div>
                  <span class="text-sm ml-2 text-gray-600 block">
                    bye
                  </span>
                </div>
              </a>
              <a
                class="border-b cursor-pointer flex bg-gray-100 border-gray-300 text-sm py-2 px-3 transition ease-in-out duration-150 items-center focus:outline-none">
                <img class="rounded-full object-cover h-10 w-10"
                  src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png" alt="username" />
                <div class="w-full pb-2">
                  <div class="flex justify-between">
                    <span class="font-semibold ml-2 text-gray-600 block">
                      Same
                    </span>
                    <span class="text-sm ml-2 text-gray-600 block">
                      50 minutes
                    </span>
                  </div>
                  <span class="text-sm ml-2 text-gray-600 block">
                    Good night
                  </span>
                </div>
              </a>
              <a
                class="border-b cursor-pointer flex border-gray-300 text-sm py-2 px-3 transition ease-in-out duration-150 items-center hover:bg-gray-100 focus:outline-none">
                <img class="rounded-full object-cover h-10 w-10"
                  src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
                <div class="w-full pb-2">
                  <div class="flex justify-between">
                    <span class="font-semibold ml-2 text-gray-600 block">
                      Emma
                    </span>
                    <span class="text-sm ml-2 text-gray-600 block">
                      6 hour
                    </span>
                  </div>
                  <span class="text-sm ml-2 text-gray-600 block">
                    Good Morning
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
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
                class="rounded-full outline-none bg-gray-100 mx-3 w-full py-2 pl-4 block focus:text-gray-700"
                name="message" required />
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
      </div>
    </div>
  </NuxtLayout>
</template>
