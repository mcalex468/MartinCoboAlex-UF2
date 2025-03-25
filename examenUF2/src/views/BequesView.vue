<template>
    <div>
      <h1>Anys Beques</h1>
      <ul>
        <li v-for="any in anys" :key="any">
          <router-link :to="`/beques/${any}`">{{ any }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { computed } from '@/vue';
  import { useBeques } from '@/compsables/useBeques.js';
  import { routerLink } from '@/vue'
  const { data } = useBeques();
  
  console.log("DADES");
  console.log(data);

  const anys = computed(() =>
    [...new Set(data.value.map(item => item.any_convocatoria))].sort((a, b) => b - a)
  );
  </script>
  