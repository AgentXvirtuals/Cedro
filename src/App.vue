<template>
  <div class="app">
    <div class="game-container">
      <!-- Your existing game content here -->
    </div>
    <Leaderboard class="leaderboard-sidebar" />
  </div>
</template>

<script setup lang="ts">
import Leaderboard from './components/Leaderboard.vue'
</script>

<style>
.app {
  display: flex;
  min-height: 100vh;
  background: #000;
  color: white;
}

.game-container {
  flex: 1;
  position: relative;
}

.leaderboard-sidebar {
  width: 300px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

/* Add Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Mono&display=swap');
</style> 