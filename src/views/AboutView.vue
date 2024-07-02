<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue';
import { useAppStore } from './../stores/appStore.ts';
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

const value = ref<string>('About')
const display_title = ref<boolean>(false)
const { getAllMessage } = storeToRefs(useAppStore())
const emit = defineEmits<{
  (e: 'new-message', value: string): void
}>()

const executeChangeMessage = () => {
  useAppStore().changeMessage('testis')
}

watch(getAllMessage, (value) => {
  if (!value) return

  emit('new-message', value)
})
</script>
<template>
  <title-component :value="value" @on-mounted="executeChangeMessage" @click="value = 'About !!!'" v-if="display_title"
  ></title-component>
  <button @click="display_title = !display_title">Toggle title</button>
</template>