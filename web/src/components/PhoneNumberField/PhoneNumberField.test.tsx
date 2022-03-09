import { render } from '@redwoodjs/testing/web'

import PhoneNumberField from './PhoneNumberField'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PhoneNumberField', () => {
  it('renders successfully', () => {
  const [phoneNumber={}, setPhoneNumber] = React.useState('')
  expect(() => {
    render(
      <Form>
        <PhoneNumberField
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      </Form>
    )
  }).not.toThrow()
  })
})
