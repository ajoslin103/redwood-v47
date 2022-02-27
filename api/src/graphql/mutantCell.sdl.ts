export const schema = gql`
  type MutantCellAnswer {
    result: String
  }

  type Query {
    runQuery: MutantCellAnswer @skipAuth
  }

  type Mutation {
    runMutation: MutantCellAnswer @skipAuth
  }
`
