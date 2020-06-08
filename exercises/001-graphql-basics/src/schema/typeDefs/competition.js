import { gql } from 'apollo-server'

import Area from './area'

const Competition = gql`
  type Competition {
    id: ID!,
    area: Area!,
    name: String!,
    code: String!,
    plan: String!,
    lastUpdated: String!,
  }
`

export default {
  Competition,
  ...Area
}