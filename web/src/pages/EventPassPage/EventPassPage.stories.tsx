import EventPassPage from './EventPassPage'
import { standard } from './EventPassPage.mock'

const standardMock = standard()

export const generated = () => {
  return <EventPassPage />
}

export default { title: 'Pages/EventPassPage' }
