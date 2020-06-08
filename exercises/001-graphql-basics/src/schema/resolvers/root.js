import { fetchJson } from '../../helpers'

const {
  API_BASE_URL,
  API_KEY
} = process.env

const getPlayer = async (playerId) => {
  const player = await fetchJson(`${API_BASE_URL}/players/${playerId}`, {
    headers: {
      'X-Auth-Token': API_KEY
    }
  })

  return player
}

export default {
  Query: {
    async team (parent, { teamId }, path) {
      const team = await fetchJson(`${API_BASE_URL}/teams/${teamId}`, {
        headers: {
          'X-Auth-Token': API_KEY
        }
      })
      
      return team
    },
    async player (parent, { playerId }) {
      const player = await getPlayer(playerId)
      return player
    }
  },
  Team: {
    async players (parent) {
      const players = parent.squad.filter(({ role }) => role === 'PLAYER').slice(0, 9)
      const playersId = players.map(({ id }) => id)

      const playersList = []
      for (const playerId of playersId) {
        const finalPlayer = await getPlayer(playerId)
        playersList.push(finalPlayer)
      }

      return playersList
    }
  }
}
