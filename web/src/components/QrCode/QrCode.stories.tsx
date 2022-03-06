import QrCode from './QrCode'
import { standard } from './QrCode.mock'

export const generated = () => {
  const standardMock = standard()
  return <QrCode url={standardMock} />
}

export default { title: 'Components/QrCode' }
