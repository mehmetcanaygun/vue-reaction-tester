<script setup lang="ts">
import Award from "../assets/award.svg";
import Clock from "../assets/clock.svg";

const props = defineProps({
  score: {
    type: Number,
    required: true,
  },
  timeLeft: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="text-slate-600 text-8xl flex justify-between px-4 font-SpaceMono">
    <p class="flex gap-1">
      <img :src="Award" alt="Award Icon" />
      {{ props.score }}
    </p>

    <p class="flex gap-1">
      {{ props.timeLeft }}
      <img :src="Clock" alt="Clock Icon" />
    </p>
  </div>
</template>
