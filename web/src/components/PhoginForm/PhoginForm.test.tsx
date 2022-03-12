import { render } from '@redwoodjs/testing/web'

import PhoginForm from './PhoginForm'
import { standard } from './PhoginForm.mock'

const standardMock = standard()


//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PhoginForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PhoginForm handleSubmit={standardMock.handleSubmit} />)
    }).not.toThrow()
  })
})
