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

  <form class="bg-white p-6 rounded-lg shadow-md" @submit="handleSubmit" method="post">
    <h2 class="text-lg font-semibold mb-4">Post the API</h2>

    <div class="mb-4">
      <label class="block text-gray-700 font-semibold mb-2" for="name">Author</label>
      <input class="w-full border-gray-400 py-2 px-3 rounded-lg shadow-sm" type="text" id="author" v-model="formData.author" name="author">
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-semibold mb-2" for="email">Read</label>
      <input class="w-full border-gray-400 py-2 px-3 rounded-lg shadow-sm" type="text" id="read" v-model="formData.read" name="read">
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-semibold mb-2" for="message">Title</label>
        <textarea class="w-full border-gray-400 py-2 px-3 rounded-lg shadow-sm" id="title" v-model="formData.title" name="title"></textarea>
    </div>

    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md" type="submit">Submit</button>
  </form>

</template>

<script>
import axios from 'axios';

export default {
  name: 'HeaderBar',
  data() {
    return {
      formData: {
        author: '',
        read: '',
        title: '',
        inputValue: '',
      },
    };
  },
  methods: {
    async handleSubmit(e) {
      console.warn(this.formData);
      e.preventDefault();

      const data = {
        author: this.formData.author,
        read: this.formData.read,
        title: this.formData.title,
      };

      try {
        // const headers = 'Content-Type: application/json';
        const response = await axios.post('http://127.0.0.1:5001/books', data);
        console.log(response.data);
      } catch (error) {
        console.error();
      }
    },
  },
};
</script>

<style>
.bg-primary {
  background-color: #0b5e7f;
}
</style>
