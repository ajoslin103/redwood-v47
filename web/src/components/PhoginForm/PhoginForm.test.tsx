import { render } from '@redwoodjs/testing/web'

import PhoginForm from './PhoginForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PhoginForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PhoginForm />)
    }).not.toThrow()
  })
})
