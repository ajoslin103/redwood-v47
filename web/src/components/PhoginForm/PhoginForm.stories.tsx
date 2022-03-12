import PhoginForm from './PhoginForm'
import { standard } from './PhoginForm.mock'

const standardMock = standard()

export const generated = () => {
  return <PhoginForm handleSubmit={standardMock.handleSubmit} />
}

export default { title: 'Components/PhoginForm' }
