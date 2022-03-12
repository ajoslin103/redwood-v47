import { render } from '@redwoodjs/testing/web'

import ImageDisplay from './ImageDisplay'
import { standard } from './ImageDisplay.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const standardMock = standard()

describe('ImageDisplay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageDisplay src={standardMock} />)
    }).not.toThrow()
  })
})
