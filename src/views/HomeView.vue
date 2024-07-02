<script setup lang="ts">

import { useRouter } from 'vue-router';
import TitleComponent from '../components/TitleComponent.vue';
import { useAppStore } from './../stores/appStore.ts';
import { watch} from 'vue'
import { storeToRefs } from 'pinia';

const router = useRouter()
const { getAllMessage } = storeToRefs(useAppStore())

watch(getAllMessage, () => {
  useAppStore().changeMessage('test')
})
</script>
<template>
    <title-component value="Home"></title-component>
    <button @click="router.push('/about')">Go to about</button>
</template>