<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{value: string}>()

</script>

<template>
  <h1>{{ value }}</h1>
</template>

