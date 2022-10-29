<script setup lang="ts">
import { ref, watch } from "vue";
import Shape from "./Shape.vue";
import ScoreAndTime from "./ScoreAndTime.vue";
import StartAndEnd from "./StartAndEnd.vue";
import { ShapeData, GameStatus } from "../types/index";
import {
  SHAPES,
  MIN_MAX_SIZE,
  MIN_MAX_ROTATION,
  CLICK_SUCCESS,
  TIME_LIMIT,
} from "../constants/index";
import { GameStatusEnum } from "../enums/index";
import { randomFromMinMax } from "../utils/index";

const shapeData = ref<ShapeData>({
  shape: "",
  size: 0,
  color: "",
  rotation: 0,
  position: [0, 0],
});
const gameStatus = ref<GameStatus>("start");
const score = ref<number>(0);
const timer = ref(0);
const timeLeft = ref<number>(TIME_LIMIT);

const prepareData = (): void => {
  // Randomize shape & other data
  const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  const size = randomFromMinMax(MIN_MAX_SIZE.min, MIN_MAX_SIZE.max);
  const color = `#${(Math.random() * 0xfffff * 1000000)
    .toString(16)
    .slice(0, 6)}`;
  const rotation = randomFromMinMax(MIN_MAX_ROTATION.min, MIN_MAX_ROTATION.max);
  const position = [
    randomFromMinMax(size, window.innerWidth - size),
    randomFromMinMax(size, window.innerHeight - size),
  ];

  shapeData.value = { shape, size, color, rotation, position };
};

prepareData();

const handleClick = () => {
  CLICK_SUCCESS.play();
  score.value++;

  prepareData();
};

const handleStart = () => {
  score.value = 0;
  timeLeft.value = TIME_LIMIT;
  gameStatus.value = GameStatusEnum.Ongoing;

  // Start timer
  timer.value = setInterval(() => {
    timeLeft.value--;
  }, 1000);
};

watch(timeLeft, (data, prevData) => {
  if (data === 0) {
    clearInterval(timer.value);
    gameStatus.value = GameStatusEnum.End;
  }
});
</script>

<template>
  <div class="w-screen h-screen bg-slate-900 relative overflow-hidden">
    <!-- Score & Time -->
    <ScoreAndTime :score="score" :timeLeft="timeLeft" />

    <!-- Start & End messages and button -->
    <StartAndEnd
      :gameStatus="gameStatus"
      :score="score"
      :handleStart="handleStart"
    />

    <Shape
      v-if="gameStatus === GameStatusEnum.Ongoing"
      :shapeData="shapeData"
      :key="shapeData.color"
      @click="handleClick"
    />
  </div>
</template>
