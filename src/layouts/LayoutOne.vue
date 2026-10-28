<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-green-500 p-20 w-full">
    Template One <slot /> <RouterView />
  </div>
</template>
