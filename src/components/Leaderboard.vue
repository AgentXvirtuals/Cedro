<template>
  <div class="leaderboard">
    <h2>Top Players</h2>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="leaderboard-container">
      <div v-for="(player, index) in topPlayers" :key="player.address" class="player-row">
        <div class="rank">{{ index + 1 }}</div>
        <div class="wallet">
          <span class="wallet-address">{{ formatAddress(player.address) }}</span>
        </div>
        <div class="score">{{ player.score }} ETH</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useLeaderboardStore } from '../stores/leaderboard'
import { storeToRefs } from 'pinia'

const store = useLeaderboardStore()
const { players, isLoading, error } = storeToRefs(store)
const { topPlayers } = store

const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

onMounted(() => {
  store.fetchLeaderboard()
})
</script>

<style scoped>
.leaderboard {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  padding: 20px;
  color: white;
  font-family: 'Inter', sans-serif;
  max-width: 600px;
  margin: 20px auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #00ff88;
  font-size: 24px;
}

.leaderboard-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.player-row {
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.player-row:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.rank {
  width: 40px;
  font-weight: bold;
  color: #00ff88;
}

.wallet {
  flex: 1;
  font-family: 'Roboto Mono', monospace;
}

.wallet-address {
  color: #888;
  font-size: 14px;
}

.score {
  font-weight: bold;
  color: #00ff88;
  font-size: 16px;
}

.loading, .error {
  text-align: center;
  padding: 20px;
  color: #888;
}

.error {
  color: #ff4444;
}
</style> 