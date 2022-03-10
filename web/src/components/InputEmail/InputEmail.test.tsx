import { render } from '@redwoodjs/testing/web'

import InputEmail from './InputEmail'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InputEmail', () => {
  it('renders successfully', () => {
  const [eMailAddress, setEMailAddress] = React.useState('')
  expect(() => {
    render(
      <Form>
        <InputEmail eMailAddress={eMailAddress} setEMailAddress={setEMailAddress} />
      </Form>
    )
  }).not.toThrow()
  })
})
