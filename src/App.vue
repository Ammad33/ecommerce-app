<template>
  <div class="app">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'

</script>

<style lang="scss">
:root {
  --primary: #ffffff;
  --primary-alt: #c522af;
  --grey: #64748b;
  --dark: #0f172a;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding: 6rem;

    }
  }
}
</style>
