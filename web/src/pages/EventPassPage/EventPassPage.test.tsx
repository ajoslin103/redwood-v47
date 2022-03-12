import { render } from '@redwoodjs/testing/web'

import EventPassPage from './EventPassPage'
import { standard } from './EventPassPage.mock'

const standardMock = standard()

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventPassPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventPassPage {...standardMock} />)
    }).not.toThrow()
  })
})
