<script setup lang="ts">
import { Refresh } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";
import Button from "../ui/button/Button.vue";
import Overlay from "./overlay.vue";
import Stat from "./stat.vue";

defineProps<{ score: number; bestScore: number; isNewBest: boolean }>();
defineEmits({ home: [], restart: [] });
</script>

<template>
  <Overlay>
    <h2 class="text-5xl font-bold">Time's up!</h2>
    <p v-if="isNewBest" class="mt-4 text-xl font-semibold text-green-600">
      New best score!
    </p>
    <div class="mt-8 flex justify-center gap-16">
      <Stat label="Score" :value="score" />
      <Stat label="Best" :value="bestScore" />
    </div>
    <div class="mt-10 flex justify-center gap-4">
      <Button
        variant="outline"
        class="h-16 px-10! text-xl"
        @click="$emit('home')"
      >
        Home
      </Button>
      <Button class="h-16 px-10! text-xl" @click="$emit('restart')">
        Restart
        <HugeiconsIcon :icon="Refresh" class="size-7" />
      </Button>
    </div>
  </Overlay>
</template>
