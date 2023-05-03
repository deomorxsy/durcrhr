<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navigation bar -->
    <nav class="bg-cyan-900">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <!--
                Heroicon name: outline/menu

                Menu open: "hidden", Menu closed: "block"
              -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Icon when menu is open. -->
              <!--
                Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden"
              -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Desktop menu items -->
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a href="/crud" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
               <a href="/crud/post" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add a book</a>
               <a href="/crud/items" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Books</a>
              <a href="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
