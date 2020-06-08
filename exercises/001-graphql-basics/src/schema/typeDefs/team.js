import { gql } from 'apollo-server'

import Area from './area'
import Competition from './competition'

const Team = gql`
  type Team {
    id: ID!
    activeCompetitions: [Competition]!
    area: Area!
    name: String!
    shortName: String!
    tla: String!
    crestUrl: String!
    address: String!
    phone: String!
    website: String!
    email: String!
    founded: Int!
    clubColors: String!
    venue: String
    squad: [Player!]!
    lastUpdated: String!
    players: [Player!]!
  }
`

export default {
  Team,
  ...Area,
  ...Competition
}
