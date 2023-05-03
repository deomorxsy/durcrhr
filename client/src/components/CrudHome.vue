<template>
  <form class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-lg font-semibold mb-4">Contact Form</h2>

    <div class="mb-4">
      <label class="block text-gray-700 font-semibold mb-2" for="name">Name</label>
      <input class="w-full border-gray-400 py-2 px-3 rounded-lg shadow-sm" type="text" id="name" name="name">
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-semibold mb-2" for="email">Email</label>
      <input class="w-full border-gray-400 py-2 px-3 rounded-lg shadow-sm" type="email" id="email" name="email">
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-semibold mb-2" for="message">Message</label>
      <textarea class="w-full border-gray-400 py-2 px-3 rounded-lg shadow-sm" id="message" name="message"></textarea>
    </div>

    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  // Component options here
};
</script>

<style>
/* Component styles here */
</style>
