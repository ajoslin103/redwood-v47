import { render } from '@redwoodjs/testing/web'

import VaxxifiLayout from './VaxxifiLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VaxxifiLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VaxxifiLayout />)
    }).not.toThrow()
  })
})
