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
  import { useBeques } from '../composables/useBeques.js';
  
  const { anys } = useBeques();
  </script>
  