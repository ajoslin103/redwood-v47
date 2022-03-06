import Image from './Image'
import { standard } from './Image.mock'

export const generated = () => {
  const standardMock = standard()
  return <Image src={standardMock} />
}

export default { title: 'Components/Image' }
