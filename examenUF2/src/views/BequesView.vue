<template>
  <div>
    <h1>Anys Beques</h1>
    <ul>
      <li v-for="any in anys" :key="any">
        <router-link :to="`/beques/${any}`" class="any">{{ any }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useBeques } from '../composable/useBeques.js';

const { anys } = useBeques();
</script>
<style scoped>
.any{
  background-color: bisque;
}
</style>