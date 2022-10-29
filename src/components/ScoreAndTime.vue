<script setup lang="ts">
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
  <div class="text-slate-600 text-8xl flex justify-between px-4">
    <p>{{ props.score }}</p>
    <p>{{ props.timeLeft }}</p>
  </div>
</template>
