<template>
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
</template>