import { gql } from 'apollo-server'

import Greeter from './greeter'

const RootQuery = gql`
  type Query {
    greet (playerId: ID!): Greeter
  }
`

export default {
  RootQuery,
  ...Greeter
}
