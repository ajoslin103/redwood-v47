import type { FindRunQueryQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindRunQueryQuery {
    runQuery {
      result
    }
  }
`

export const beforeQuery = (props) => {
  const variables = { ...props }
  return { variables, fetchPolicy: 'no-cache' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  runQuery
}: CellSuccessProps<FindRunQueryQuery>) => {
  return <div>{JSON.stringify(runQuery.result)}</div>
}
