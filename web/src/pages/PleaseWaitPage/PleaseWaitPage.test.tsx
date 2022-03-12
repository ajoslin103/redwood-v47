import { render } from '@redwoodjs/testing/web'

import PleaseWaitPage from './PleaseWaitPage'
import { standard } from './PleaseWaitPage.mock'

const standardMock = standard()

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PleaseWaitPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PleaseWaitPage {...standardMock} />)
    }).not.toThrow()
  })
})
