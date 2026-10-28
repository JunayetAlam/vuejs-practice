<script setup lang="ts">
import Overlay from "./overlay.vue";

defineProps<{ value: number }>();
</script>

<template>
  <Overlay :card="false">
    <div
      :key="value"
      class="text-[12rem] font-bold text-white tabular-nums animate-pop-in"
    >
      {{ value }}
    </div>
  </Overlay>
</template>

<style>
@keyframes pop-in {
  from {
    transform: scale(1.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-pop-in {
  animation: pop-in 0.4s ease-out;
}
</style>
