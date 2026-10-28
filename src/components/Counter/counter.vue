<script setup lang="ts">
import { Minus, Plus, Refresh } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";
import Container from "../Container.vue";
import Button from "../ui/button/Button.vue";
import { onMounted, onUnmounted, ref } from "vue";
import Timer from "./timer.vue";

const count = ref(0);
const enterKeyPressButton = ref<InstanceType<typeof Button> | null>(null);
const maxCount = 10;
const secondTimer = ref(maxCount);

let timer: ReturnType<typeof setInterval>;

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && !event.repeat) {
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      target.closest("input, textarea, select")
    ) {
      return;
    }

    // stops Enter from clicking the focused button (e.g. Reset)
    event.preventDefault();
    enterKeyPressButton.value?.$el.click();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

onMounted(() => {
  timer = setInterval(() => {
    secondTimer.value--;

    if (secondTimer.value < 0) {
      reset();
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
  secondTimer.value = maxCount;
};
</script>

<template>
  <Container
    :class="`py-14`"
    :style="`background: rgba(0, 100, 0, ${count / 100})`"
  >
    <h1 class="text-center text-7xl font-bold">Counter</h1>

    <div class="mt-20 bg-background w-full max-w-max p-20 mx-auto flex gap-10">
      <Timer :timer="secondTimer" :maxCount="maxCount" />
      <div>
        <div class="flex items-center justify-center gap-10">
          <!-- <Button
            variant="outline"
            size="icon"
            class="size-20 rounded-2xl"
            @click="decrement"
          >
            <HugeiconsIcon :icon="Minus" class="size-9" />
          </Button> -->

          <div class="min-w-32 text-center">
            <span class="text-8xl font-bold tabular-nums">{{ count }}</span>
          </div>

          <Button
            class="h-40 rounded-3xl text-2xl px-10!"
            ref="enterKeyPressButton"
            @click="increment"
          >
            Press Enter <HugeiconsIcon :icon="Plus" class="size-9" />
          </Button>
        </div>
        <div class="text-center pt-10">
          <Button
            variant="secondary"
            class="px-20! h-18 text-2xl"
            @click="reset"
          >
            Reset
            <HugeiconsIcon :icon="Refresh" class="size-9" />
          </Button>
        </div>
      </div>
    </div>
  </Container>
</template>

<style></style>
