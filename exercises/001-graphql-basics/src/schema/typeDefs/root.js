import { gql } from 'apollo-server'

import Player from './player'
import Team from './team'

const RootQuery = gql`
  type Query {
    team (teamId: ID!): Team
    player (playerId: ID!): Player
  }
`

export default {
  RootQuery,
  ...Player,
  ...Team
}
