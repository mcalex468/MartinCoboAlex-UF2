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


<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
}

#app {
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  padding: 20px;
}
</style>