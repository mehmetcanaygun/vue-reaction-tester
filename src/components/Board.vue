<script setup lang="ts">
import { ref } from "vue";
import Shape from "./Shape.vue";
import { ShapeData } from "../types/index";
import { SHAPES, MIN_MAX_SIZE, MIN_MAX_ROTATION } from "../constants/index";
import { randomFromMinMax } from "../utils/index";

const shapeData = ref<ShapeData>({
  shape: "",
  size: 0,
  color: "",
  rotation: 0,
  position: [0, 0],
});

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
  console.log("Shape is clicked...");
  prepareData();
};
</script>

<template>
  <div class="w-screen h-screen bg-slate-900 relative overflow-hidden">
    <Shape :shapeData="shapeData" :key="shapeData.color" @click="handleClick" />
  </div>
</template>
