<script setup lang="ts">
import { Minus, Plus } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";
import Container from "../Container.vue";
import Button from "../ui/button/Button.vue";
</script>

<template>
  <Container class="bg-gray-200 py-14">
    <h1 class="text-center text-7xl font-bold">Counter</h1>

    <div class="mt-20 bg-background w-full max-w-4xl p-20 mx-auto">
      <div class="flex items-center justify-center gap-10">
        <Button variant="outline" size="icon" class="size-20 rounded-2xl">
          <HugeiconsIcon :icon="Minus" class="size-9" />
        </Button>

        <div class="min-w-32 text-center">
          <span class="text-8xl font-bold tabular-nums">0</span>
        </div>

        <Button size="icon" class="size-20 rounded-2xl">
          <HugeiconsIcon :icon="Plus" class="size-9" />
        </Button>
      </div>
    </div>
  </Container>
</template>

<style></style>
