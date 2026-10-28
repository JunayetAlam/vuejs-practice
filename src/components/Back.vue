<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{ url: string }>();
</script>
<template>
  <RouterLink class="underline font-bold text-white" :to="url"
    >Go Back</RouterLink
  >
</template>
