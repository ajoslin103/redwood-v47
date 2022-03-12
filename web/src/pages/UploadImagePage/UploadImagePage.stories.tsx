import UploadImagePage from './UploadImagePage'
import { standard } from './UploadImagePage.mock'

const standardMock = standard()

export const generated = () => {
  return <UploadImagePage {...standardMock} />
}

export default { title: 'Pages/UploadImagePage' }
