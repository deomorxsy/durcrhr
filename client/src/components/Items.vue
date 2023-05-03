<template>
    <nav class="bg-primary">
    <div class="container mx-auto">
      <div class="flex items-center justify-between py-4">
        <div class="flex items-center">
          <svg class="h-8 w-8 text-white"
               viewBox="0 0 20 20"
               fill="currentColor">
            <path d="M14.828 14.828c-2.56 2.56-6.738 2.56-9.298 0-2.56-2.56-2.56-6.738 0-9.298 2.56-2.56 6.738-2.56 9.298 0 2.56 2.56 2.56 6.738 0 9.298zM9 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"></path>
          </svg>
          <h1 class="text-white text-lg ml-2 font-bold">DURC@ISI</h1>
        </div>
        <button class="flex md:hidden items-center text-white hover:text-gray-500 focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <div class="container mx-auto my-8">
    <table class="w-full border">
      <thead>
        <tr>
          <!-- <th class="border p-2 bg-gray-200 font-medium text-gray-600">Cover</th>-->
          <th class="border p-2 bg-cyan-800 font-medium text-gray-50">Author</th>
          <th class="border p-2 bg-cyan-800 font-medium text-gray-50">Read</th>
          <th class="border p-2 bg-cyan-800 font-medium text-gray-50">Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
         <!-- <td class="border p-2">
            <img class="object-cover w-full h-48 rounded-lg" :src="item.image" alt="">
         </td> -->
          <td class="border p-2 text-center">{{ item.author }}</td>
          <td class="border p-2 text-center">{{ item.read }}</td>
          <td class="border p-2 text-center">{{ item.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Items',
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    fetch('http://127.0.0.1:5001/books')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        this.items = data.books;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
