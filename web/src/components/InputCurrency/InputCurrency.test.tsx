import { render } from '@redwoodjs/testing/web'

import InputCurrency from './InputCurrency'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InputCurrency', () => {
  it('renders successfully', () => {
  const [eMailAddress, setEMailAddress] = React.useState('')
  expect(() => {
    render(
      <Form>
        <InputCurrency eMailAddress={eMailAddress} setEMailAddress={setEMailAddress} />
      </Form>
    )
  }).not.toThrow()
  })
})
