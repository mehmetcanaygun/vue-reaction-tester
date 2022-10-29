<script setup lang="ts">
import { PropType } from "vue";
import { GameStatus } from "../types";
import { GameStatusEnum } from "../enums";
import { TIME_LIMIT } from "../constants";

const props = defineProps({
  gameStatus: {
    type: String as PropType<GameStatus>,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  handleStart: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div
    v-if="props.gameStatus !== GameStatusEnum.Ongoing"
    class="absolute top-1/2 left-1/2 text-slate-300 -translate-x-1/2 -translate-y-1/2 text-center"
  >
    <h1
      class="text-4xl font-SpaceMono text-slate-400 mb-8 px-8 relative before:absolute before:-top-2 before:-left-2 before:w-8 before:h-8 before:rounded before:border-2 before:border-sky-300 after:absolute after:-bottom-2 after:-right-2 after:w-8 after:h-8 after:rounded-full after:border-2 after:border-pink-500"
    >
      Reaction Tester
    </h1>

    <p v-if="props.gameStatus === GameStatusEnum.Start">
      Try to click on shapes as many as you can in {{ TIME_LIMIT }} seconds!
    </p>
    <p v-if="props.gameStatus === GameStatusEnum.End">
      You've clicked on
      <span class="font-bold text-sky-600">{{ props.score }}</span> shapes!
    </p>

    <button
      v-if="
        props.gameStatus === GameStatusEnum.Start ||
        props.gameStatus === GameStatusEnum.End
      "
      @click="props.handleStart"
      class="mt-2 text-sky-600 cursor-pointer"
    >
      {{ props.gameStatus === GameStatusEnum.Start ? "Start" : "Play Again" }}
    </button>
  </div>
</template>
