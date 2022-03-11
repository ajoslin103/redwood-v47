import PhoginPage from './PhoginPage'
import { standard } from './PhoginPage.mock'

const standardMock = standard()

export const generated = () => {
  return <PhoginPage {...standardMock} />
}

export default { title: 'Pages/PhoginPage' }
