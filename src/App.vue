<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Counter from "./components/Counter/counter.vue";
</script>

<template>
  <nav class="bg-gray-800 text-white p-4 relative z-100">
    <ul class="flex space-x-4">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/counter">Counter</RouterLink></li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
