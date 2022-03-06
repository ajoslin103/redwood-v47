import { render } from '@redwoodjs/testing/web'

import Image from './Image'
import { standard } from './Image.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const standardMock = standard()

describe('Image', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Image src={standardMock} />)
    }).not.toThrow()
  })
})
