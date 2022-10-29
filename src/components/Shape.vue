<script setup lang="ts">
import { PropType } from "vue";
import { ShapeData } from "../types/index";
import { ShapeEnum } from "../enums";

const props = defineProps({
  shapeData: {
    type: Object as PropType<ShapeData>,
    required: true,
  },
});

const { shape, size, color, rotation, position } = props.shapeData;

const sharedClasses =
  "transition-all duration-200 cursor-pointer hover:drop-shadow-shape";
const sharedStyles = {
  ...(shape !== ShapeEnum.Triangle && { backgroundColor: color }),
  transform: `rotate(${rotation}deg)`,
};
</script>

<template>
  <div
    class="absolute"
    :style="{
      top: `${position[1]}px`,
      left: `${position[0]}px`,
      transform: `translate(-50%, -50%)`,
      animation: `enlarge 0.2s ease-in-out forwards`,
    }"
  >
    <!-- Square -->
    <div
      v-if="shape === ShapeEnum.Square"
      :class="sharedClasses"
      :style="{
        ...sharedStyles,
        width: `${size}px`,
        aspectRatio: `1`,
        borderRadius: `6px`,
      }"
    ></div>

    <!-- Rectangle -->
    <div
      v-if="shape === ShapeEnum.Rectangle"
      :class="sharedClasses"
      :style="{
        ...sharedStyles,
        width: `${size}px`,
        aspectRatio: `2/3`,
        borderRadius: `6px`,
      }"
    ></div>

    <!-- Circle -->
    <div
      v-if="shape === ShapeEnum.Circle"
      :class="sharedClasses"
      :style="{
        ...sharedStyles,
        width: `${size}px`,
        aspectRatio: `1`,
        borderRadius: `50%`,
      }"
    ></div>

    <!-- Triangle -->
    <div
      v-if="shape === ShapeEnum.Triangle"
      :class="sharedClasses"
      :style="{
        ...sharedStyles,
        width: `${size}px`,
        aspectRatio: `1`,
        borderTop: `0`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
        borderLeft: `${size / 2}px solid transparent`,
      }"
    ></div>
  </div>
</template>

<style>
@keyframes enlarge {
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
