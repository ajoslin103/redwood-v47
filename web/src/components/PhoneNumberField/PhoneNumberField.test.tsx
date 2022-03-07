import { render } from '@redwoodjs/testing/web'

import PhoneNumberField from './PhoneNumberField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PhoneNumberField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PhoneNumberField />)
    }).not.toThrow()
  })
})
