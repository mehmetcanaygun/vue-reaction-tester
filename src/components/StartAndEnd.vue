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
    class="absolute top-1/2 left-1/2 text-slate-300 -translate-x-1/2 -translate-y-1/2 text-center"
  >
    <p v-if="props.gameStatus === GameStatusEnum.Start">
      Try to click on as many as shapes you can in {{ TIME_LIMIT }} seconds!
    </p>
    <p v-if="props.gameStatus === GameStatusEnum.End">
      You've clicked on {{ props.score }} shapes!
    </p>
    <button
      v-if="
        props.gameStatus === GameStatusEnum.Start ||
        props.gameStatus === GameStatusEnum.End
      "
      @click="props.handleStart"
      class="mt-4 text-sky-600 cursor-pointer"
    >
      {{ props.gameStatus === GameStatusEnum.Start ? "Start" : "Play Again" }}
    </button>
  </div>
</template>
