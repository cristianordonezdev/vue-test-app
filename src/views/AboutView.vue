<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue';
import { useAppStore } from '../stores/appStore.ts';

const executeChangeMessage = () => {
    useAppStore().changeMessage('testis')
}
</script>
<template>
    <title-component value="About" @on-mounted="executeChangeMessage"></title-component>
</template>