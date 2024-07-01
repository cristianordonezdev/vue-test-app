<script setup lang="ts">

import { useRouter } from 'vue-router';
import TitleComponent from '../components/TitleComponent.vue';
const router = useRouter()
</script>
<template>
    <title-component value="Home"></title-component>
    <button @click="router.push('/about')">Go to about</button>
</template>