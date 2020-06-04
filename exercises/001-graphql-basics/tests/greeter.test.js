import { createTestClient } from 'apollo-server-testing'
import { gql } from 'apollo-server'

import fetch from 'jest-fetch-mock'

import server from '../src/server'

const { query } = createTestClient(server)

const mockAPIResponse = JSON.stringify({
  id: 44,
  name: 'Cristiano Ronaldo',
  firstName: 'Cristiano Ronaldo',
  lastName: null,
  dateOfBirth: '1985-02-05',
  countryOfBirth: 'Portugal',
  nationality: 'Portugal',
  position: 'Attacker',
  lastUpdated: '2018-08-09T05:07:03Z'
})

describe('Greeter resolver', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('greets to you', async () => {
    fetch.mockResponseOnce(mockAPIResponse)

    const GET_GREETING = gql`
      query GetGreeting ($playerId: ID!) {
        greet (playerId: $playerId) {
          says
        }
      }
    `

    const res = await query({
      query: GET_GREETING,
      variables: {
        playerId: 3176
      }
    })

    const {
      data: {
        greet
      }
    } = res

    expect(greet.says).toBe('Hello Cristiano Ronaldo')
  })
})
