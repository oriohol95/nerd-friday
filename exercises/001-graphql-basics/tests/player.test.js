import { createTestClient } from 'apollo-server-testing'
import { gql } from 'apollo-server'

import fetch from 'jest-fetch-mock'

import server from '../src/server'

const { query } = createTestClient(server)

const expectedResponse = {
  id: "44",
  name: 'Cristiano Ronaldo',
  firstName: 'Cristiano Ronaldo',
  lastName: null,
  dateOfBirth: '1985-02-05',
  countryOfBirth: 'Portugal',
  nationality: 'Portugal',
  position: 'Attacker',
  lastUpdated: '2018-08-09T05:07:03Z'
}

const mockAPIResponse = JSON.stringify(expectedResponse)

describe('Greeter resolver', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('player exist', async () => {
    fetch.mockResponseOnce(mockAPIResponse)

    const GET_PLAYER = gql`
      query player ($playerId: ID!) {
        player (playerId: $playerId) {
          id
          name
          firstName
          lastName
          dateOfBirth
          countryOfBirth
          nationality
          position
          lastUpdated
        }
      }
    `

    const res = await query({
      query: GET_PLAYER,
      variables: {
        playerId: 3176
      }
    })

    const {
      data: {
        player
      }
    } = res

    expect(player).toEqual(expectedResponse)
  })
})
