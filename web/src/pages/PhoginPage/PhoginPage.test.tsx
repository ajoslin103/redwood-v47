import { render } from '@redwoodjs/testing/web'

import PhoginPage from './PhoginPage'
import { standard } from './PhoginPage.mock'

const standardMock = standard()

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PhoginPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PhoginPage {...standardMock} />)
    }).not.toThrow()
  })
})
