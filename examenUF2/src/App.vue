<template>
  <div>
    <header>
      <Navigation />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navigation from './components/navigation.vue';
</script>
