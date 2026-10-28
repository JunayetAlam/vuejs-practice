<script setup lang="ts">
import { cn } from "cn";

const props = withDefaults(defineProps<{ class?: string }>(), {
  class: "",
});
</script>

<template>
  <section :class="cn('max-w-360 mx-auto px-5', props.class)">
    <slot />
  </section>
</template>
