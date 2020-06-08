import { gql } from 'apollo-server'

const Player = gql`
  type Player {
    id: ID!
    name: String!
    firstName: String
    lastName: String
    dateOfBirth: String!
    countryOfBirth: String!
    nationality: String!
    position: String!
    shirtNumber: Int
    lastUpdated: String
  }
`

export default {
  Player
}