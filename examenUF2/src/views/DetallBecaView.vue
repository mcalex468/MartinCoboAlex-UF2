<template>
    <div>
      <h1>Detalls del Centre: {{ centre }}</h1>
      <ul>
        <li v-for="beca in bequesDetail" :key="beca.id">
          <p><strong>Beques Dones:</strong> {{ beca.formaci_dones }}</p>
          <p><strong>Beques Homes:</strong> {{ beca.formaci_homes }}€</p>
          <p><strong>Mobilitat Dones:</strong> {{ beca.mobilitat_dones }}</p>
          <p><strong>Mobilitat Homes:</strong> {{ beca.mobilitat_homes }}</p>
          <hr />
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { useBeques } from '../composables/useBeques.js';
  
  const route = useRoute();
  const year = route.params.year;
  const centre = route.params.centre;
  
  const { getBequesDetail } = useBeques();
  const bequesDetail = getBequesDetail(year, centre);
  </script>
  