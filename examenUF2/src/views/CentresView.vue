<template>
    <div>
      <h1>Centres per Any: {{ year }}</h1>
      <ul>
        <li v-for="centre in centres" :key="centre">
          <router-link :to="`/beques/${year}/${centre}`">{{ centre }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { useBeques } from '../composables/useBeques.js';
  
  const route = useRoute();
  const year = route.params.year;
  const { getCentrosByYear } = useBeques();
  const centres = getCentrosByYear(year);
  </script>
  