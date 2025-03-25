<template>
  <div>
    <h1>Centres per a l'any {{ any }}</h1>
    <ul>
      <li v-for="centre in centres" :key="centre">
        <router-link :to="`/beques/${any}/centres/${centre}`">{{ centre }}</router-link>
      </li>
    </ul>
  </div>
  <button @click="$router.push('/beques')">Enrere</button>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useBeques } from '../composable/useBeques.js';

const { dades, centres, fecthBeques, fetchCentres } = useBeques();
const route = useRoute();
const any = route.params.any;

onMounted(async () => {
  if (dades.value.length === 0) {
    await fetchBeques();
  }
  fetchCentres(any);
});

</script>