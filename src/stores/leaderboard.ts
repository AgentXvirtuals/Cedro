import { defineStore } from 'pinia'

interface Player {
  address: string
  score: number
}

export const useLeaderboardStore = defineStore('leaderboard', {
  state: () => ({
    players: [] as Player[],
    isLoading: false,
    error: null as string | null
  }),

  actions: {
    async fetchLeaderboard() {
      this.isLoading = true
      try {
        // In a real app, this would be an API call
        // For now, we'll use mock data
        this.players = [
          { address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', score: 1.5 },
          { address: '0x123f681646d4A755815f9CB19e1aCc0765A999D2', score: 1.2 },
          { address: '0x456f681646d4A755815f9CB19e1aCc0765A999D3', score: 0.9 },
          { address: '0x789f681646d4A755815f9CB19e1aCc0765A999D4', score: 0.7 },
          { address: '0x012f681646d4A755815f9CB19e1aCc0765A999D5', score: 0.5 }
        ]
      } catch (err) {
        this.error = 'Failed to fetch leaderboard data'
        console.error(err)
      } finally {
        this.isLoading = false
      }
    },

    addScore(address: string, score: number) {
      const existingPlayer = this.players.find(p => p.address === address)
      if (existingPlayer) {
        existingPlayer.score += score
      } else {
        this.players.push({ address, score })
      }
      // Sort players by score in descending order
      this.players.sort((a, b) => b.score - a.score)
    }
  },

  getters: {
    topPlayers: (state) => state.players.slice(0, 5)
  }
}) 