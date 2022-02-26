import type { FindMyCellQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindMyCellQuery($id: Int!) {
    myCell: myCell(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ myCell }: CellSuccessProps<FindMyCellQuery>) => {
  return <div>{JSON.stringify(myCell)}</div>
}
