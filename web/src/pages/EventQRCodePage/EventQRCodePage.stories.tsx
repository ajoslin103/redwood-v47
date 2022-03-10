import EventQRCodePage from './EventQRCodePage'
import { standard } from './EventQRCodePage.mock'

const standardMock = standard()

export const generated = () => {
  return <EventQRCodePage {...standardMock} />
}

export default { title: 'Pages/EventQRCodePage' }
