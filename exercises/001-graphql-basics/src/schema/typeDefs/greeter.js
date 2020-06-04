import { gql } from 'apollo-server'

const Greeter = gql`
  type Greeter {
    says: String!
  }
`

export default {
  Greeter
}
