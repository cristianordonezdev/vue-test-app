<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import axios from 'axios';
import { useAppStore } from '../stores/appStore.ts';
import TitleComponent from './TitleComponent.vue';
import { propsInterface } from '../interfaces/test_interfaces';

const emit = defineEmits<{
  (e: 'card-clicked'): void
  (e: 'up', count: number): void
}>()
const props = defineProps({
  msg: propsInterface,
})

const count = ref(1)

const increment = () => {
  count.value++;
}

const handleOnMountedTitle = () => {
  emit('up', count.value)
}

const clickCard = () => {
  emit('card-clicked')
}
watch(() => props.msg, (value) => {
  // axios.get('https://httpbin.org/get')
  if (!value) return;
  useAppStore().changeMessage(value)

})

const prefixedMessage = computed(() => `My Title: ${props.msg}`)
</script>

<template>
  <!--  v-if="props.msg" -->
  <title-component :value="`My Title: ${props.msg}`"
    @on-mounted="handleOnMountedTitle"
  />

  <div class="card" :class="{'card-success': !props.msg }"
    @click="clickCard"
  >
    <button type="button" @click="increment">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
