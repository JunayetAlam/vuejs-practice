<script setup lang="ts">
const props = withDefaults(defineProps<{ timer: number; maxCount: number }>(), {
  timer: 90,
  maxCount: 10,
});
</script>

<template>
  <div class="flex flex-col items-center gap-3 self-stretch">
    <span class="text-lg font-semibold tabular-nums">{{ props.timer }}</span>
    <div
      class="flex-1 rounded-full overflow-hidden flex justify-end items-start"
      :style="`background: linear-gradient(
            to top,
            #ef4444,
            #f97316,
            #eab308,
            #84cc16,
            #22c55e
          );`"
    >
      <div
        class="w-6 h-full flex-1 shadow-inner bg-background"
        :style="`height: ${100 - (props.timer / props.maxCount) * 100}%;
          `"
      ></div>
    </div>
  </div>
</template>
