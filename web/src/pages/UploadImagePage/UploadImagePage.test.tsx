import { render } from '@redwoodjs/testing/web'

import UploadImagePage from './UploadImagePage'
import { standard } from './UploadImagePage.mock'

const standardMock = standard()

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UploadImagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadImagePage {...standardMock} />)
    }).not.toThrow()
  })
})
