<script setup lang="ts">
import { Minus, Plus, Refresh } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";
import Container from "../Container.vue";
import Button from "../ui/button/Button.vue";
import { onMounted, onUnmounted, ref } from "vue";
import Timer from "./timer.vue";
import StartScreen from "./start-screen.vue";
import Countdown from "./countdown.vue";
import ResultScreen from "./result-screen.vue";
import { useBestScore } from "../../composables/useBestScore";

type Phase = "idle" | "countdown" | "playing" | "finished";

const count = ref(0);
const enterKeyPressButton = ref<InstanceType<typeof Button> | null>(null);
const maxCount = 10;
const secondTimer = ref(maxCount);

const phase = ref<Phase>("idle");
const countdown = ref(3);
const { bestScore, submitScore } = useBestScore();
const isNewBest = ref(false);

let timer: ReturnType<typeof setInterval> | undefined;

const stopTimer = () => {
  clearInterval(timer);
  timer = undefined;
};

const finishGame = () => {
  stopTimer();
  isNewBest.value = submitScore(count.value);
  phase.value = "finished";
};

const startGame = () => {
  stopTimer();
  phase.value = "playing";
  timer = setInterval(() => {
    secondTimer.value--;

    if (secondTimer.value <= 0) {
      finishGame();
    }
  }, 1000);
};

const startCountdown = () => {
  stopTimer();
  count.value = 0;
  secondTimer.value = maxCount;
  countdown.value = 3;
  phase.value = "countdown";
  timer = setInterval(() => {
    countdown.value--;

    if (countdown.value <= 0) {
      startGame();
    }
  }, 1000);
};

const cancel = () => {
  stopTimer();
  count.value = 0;
  secondTimer.value = maxCount;
  phase.value = "idle";
};

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

    if (phase.value === "idle") {
      startCountdown();
    } else if (phase.value === "playing") {
      enterKeyPressButton.value?.$el.click();
    }
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  stopTimer();
});

const increment = () => {
  if (phase.value !== "playing") return;
  count.value++;
};
const decrement = () => {
  count.value--;
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
        <div class="flex justify-center gap-4 pt-10">
          <Button
            variant="outline"
            class="px-12! h-18 text-2xl"
            @click="cancel"
          >
            Cancel
          </Button>
          <Button
            variant="secondary"
            class="px-20! h-18 text-2xl"
            @click="startCountdown"
          >
            Reset
            <HugeiconsIcon :icon="Refresh" class="size-9" />
          </Button>
        </div>
      </div>
    </div>

    <StartScreen
      v-if="phase === 'idle'"
      :best-score="bestScore"
      :seconds="maxCount"
      @start="startCountdown"
    />
    <Countdown v-else-if="phase === 'countdown'" :value="countdown" />
    <ResultScreen
      v-else-if="phase === 'finished'"
      :score="count"
      :best-score="bestScore"
      :is-new-best="isNewBest"
      @restart="startCountdown"
      @home="cancel"
    />
  </Container>
</template>
