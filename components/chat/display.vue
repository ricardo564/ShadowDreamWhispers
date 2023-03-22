<template>
  <div class="flex h-auto w-full">
    <div class="w-full">
      <div class="border-b flex border-gray-300 p-3 relative items-center">
        <img
          class="rounded-full object-cover h-10 w-10"
          src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
          alt="username"
        >
        <span class="font-bold ml-2 text-gray-600 block">
          Emma
        </span>
        <span class="rounded-full bg-green-600 h-3 top-3 left-10 w-3 absolute" />
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
      <ChatQuery />
    </div>
  </div>
</template>
