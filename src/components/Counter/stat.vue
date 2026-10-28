<script setup lang="ts">
defineProps<{ label: string; value: number }>();
</script>

<template>
  <div>
    <p class="text-lg text-muted-foreground">{{ label }}</p>
    <p class="text-6xl font-bold tabular-nums">{{ value }}</p>
  </div>
</template>
