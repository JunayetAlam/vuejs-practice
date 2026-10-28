<script setup lang="ts">
withDefaults(defineProps<{ card?: boolean }>(), {
  card: true,
});
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
  >
    <div
      v-if="card"
      class="bg-background w-full max-w-lg rounded-3xl p-14 text-center shadow-2xl"
    >
      <slot />
    </div>
    <slot v-else />
  </div>
</template>
