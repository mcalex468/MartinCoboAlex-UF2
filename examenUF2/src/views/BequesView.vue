<template>
  <div>
    <h1>Anys</h1>
    <ul>
      <li v-for="any in anys" :key="any">
        <router-link :to="`/beques/${any}/centres`">{{ any }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useBeques } from '../composable/useBeques';

const { anys, fetchBeques } = useBeques();

onMounted(fetchBeques); 
</script>