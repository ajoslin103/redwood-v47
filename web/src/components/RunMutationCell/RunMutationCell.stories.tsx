import { Loading, Empty, Failure, Success } from './RunMutationCell'
import { standard } from './RunMutationCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  const standardMock = standard()
  return Success ? <Success runMutation={standardMock?.runMutation} /> : null
}

export default { title: 'Cells/RunMutationCell' }
