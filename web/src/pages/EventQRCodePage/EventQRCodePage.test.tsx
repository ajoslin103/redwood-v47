import { render } from '@redwoodjs/testing/web'

import EventQRCodePage from './EventQRCodePage'
import { standard } from './EventQRCodePage.mock'

const standardMock = standard()

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventQRCodePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventQRCodePage {...standardMock} />)
    }).not.toThrow()
  })
})
