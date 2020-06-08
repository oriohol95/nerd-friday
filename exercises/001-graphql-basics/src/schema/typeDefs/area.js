import { gql } from 'apollo-server'

const Area = gql`
  type Area {
    id: Int!,
    name: String!
  }
`

export default {
  Area
}