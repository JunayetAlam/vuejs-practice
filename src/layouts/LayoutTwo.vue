<script setup lang="ts">
import Back from "@/components/Back.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-red-500 p-20 w-full">
    Template Two <Back url="/" /> <RouterView />
  </div>
</template>
