import { render } from '@redwoodjs/testing/web'

import PhoneNumberInput from './PhoneNumberInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PhoneNumberInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PhoneNumberInput />)
    }).not.toThrow()
  })
})
