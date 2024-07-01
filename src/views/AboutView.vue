<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue';
import { useAppStore } from '../stores/appStore.ts';
import { ref } from 'vue';

const value = ref('About')
const executeChangeMessage = () => {
  useAppStore().changeMessage('testis')
}
</script>
<template>
  <title-component :value="value" @on-mounted="executeChangeMessage" @click="value = 'About !!!'"></title-component>
</template>