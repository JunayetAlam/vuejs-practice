<script setup lang="ts">
import Button from "../ui/button/Button.vue";
import Overlay from "./overlay.vue";

defineProps<{ bestScore: number; seconds: number }>();
defineEmits<{ start: [] }>();
</script>

<template>
  <Overlay>
    <h2 class="text-5xl font-bold">Ready?</h2>
    <p class="mt-4 text-lg text-muted-foreground">
      Press Enter as many times as you can in {{ seconds }} seconds.
    </p>
    <p class="mt-8 text-2xl">
      Best score:
      <span class="font-bold tabular-nums">{{ bestScore }}</span>
    </p>
    <Button class="mt-10 h-16 px-16! text-2xl" @click="$emit('start')">
      Start
    </Button>
  </Overlay>
</template>
