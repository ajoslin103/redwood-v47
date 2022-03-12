import PleaseWaitPage from './PleaseWaitPage'
import { standard } from './PleaseWaitPage.mock'

const standardMock = standard()

export const generated = () => {
  return <PleaseWaitPage {...standardMock} />
}

export default { title: 'Pages/PleaseWaitPage' }
