import SniffPage from './SniffPage'
import { standard } from './SniffPage.mock'

const standardMock = standard()

export const generated = () => {
  return <SniffPage {...standardMock} />
}

export default { title: 'Pages/SniffPage' }
