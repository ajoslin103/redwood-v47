export const schema = gql`
  type MutantCellQueryAnswer {
    result: String
  }

  type MutantCellMutationAnswer {
    result: String
  }

  type Query {
    runQuery: MutantCellQueryAnswer @skipAuth
  }

  type Mutation {
    runMutation: MutantCellMutationAnswer @skipAuth
  }
`
