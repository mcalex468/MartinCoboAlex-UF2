<template>
    <div>
      <h1>Centres del Any - {{ $route.params.any }}</h1>
      <ul>
        <li v-for="centre in centres" :key="center">
          <router-link :to="`/beques/${$route.params.any}/${centre}`">{{ centre }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useBeques } from '../composables/useBeques.js';
  import { useRoute } from 'vue-router';
  
  const { data } = useBeques();
  const route = useRoute();
  
  const centres = computed(() =>
    [...new Set(data.value.filter(item => item.any_convocatoria == route.params.any).map(item => item.nom_entitat))].sort());
  </script>
  