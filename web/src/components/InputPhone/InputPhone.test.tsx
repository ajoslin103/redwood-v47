import { render } from '@redwoodjs/testing/web'

import InputPhone from './InputPhone'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InputPhone', () => {
  it('renders successfully', () => {
  const [phoneNumber={}, setPhoneNumber] = React.useState('')
  expect(() => {
    render(
      <Form>
        <InputPhone
          disabled={false}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
        <InputPhone
          disabled={true}
          phoneNumber={'disabled'}
          setPhoneNumber={setPhoneNumber}
        />
      </Form>
    )
  }).not.toThrow()
  })
})
