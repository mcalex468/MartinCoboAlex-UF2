<template>
    <nav>
      <h3>Examen M14 UF2</h3>
      <router-link to="/">Home</router-link>
      <router-link to="/beques">Beques</router-link>
    </nav>
  </template>
  <script setup>
  </script>
  
  <style scoped>
  nav {
    background-color: #3498db;
    padding: 15px;
    display: flex;
    gap: 15px;
    justify-content: center;
  }
  
  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;
  }
  
  nav a:hover {
    background-color: #2980b9;
  }
  </style>