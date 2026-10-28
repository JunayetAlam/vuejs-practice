<script setup lang="ts">
defineProps<{
  url: string;
}>();
</script>

<template>
  <RouterLink :to="url" class="font-medium underline"
    >Go Next Layout</RouterLink
  >
</template>
