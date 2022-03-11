import { render } from '@redwoodjs/testing/web'

import SniffPage from './SniffPage'
import { standard } from './SniffPage.mock'

const standardMock = standard()

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SniffPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SniffPage {...standardMock} />)
    }).not.toThrow()
  })
})
