import { fetchJson } from '../../helpers'

const {
  API_BASE_URL,
  API_KEY
} = process.env

export default {
  Query: {
    async greet (parent, { playerId }) {
      const { name } = await fetchJson(`${API_BASE_URL}/players/${playerId}`, {
        headers: {
          'X-Auth-Token': API_KEY
        }
      })

      return {
        says: `Hello ${name}`
      }
    }
  }
}
