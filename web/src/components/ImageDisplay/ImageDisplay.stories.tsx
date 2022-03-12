import ImageDisplay from './ImageDisplay'
import { standard } from './ImageDisplay.mock'

export const generated = () => {
  const standardMock = standard()
  return <ImageDisplay src={standardMock} />
}

export default { title: 'Components/ImageDisplay' }
