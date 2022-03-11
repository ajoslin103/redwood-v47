import QrCode from './QrCode'
import { standard } from './QrCode.mock'

export const generated = () => {
  const standardMock = standard()
  return <QrCode zoom={standardMock.zoom} url={standardMock.url} />
}

export default { title: 'Components/QrCode' }
