<script setup lang="ts">
import Back from "@/components/Back.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-blue-500 p-20 w-full">
    Template Three <Back url="/layout-two" /> <RouterView />
  </div>
</template>
