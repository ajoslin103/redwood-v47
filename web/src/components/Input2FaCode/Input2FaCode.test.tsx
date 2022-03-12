import { render } from '@redwoodjs/testing/web'

import Input2FaCode from './Input2FaCode'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Input2FaCode', () => {
  it('renders successfully', () => {
  const [twoFACode, setTwoFACode] = React.useState('')
  expect(() => {
    render(
      <Form>
        <Input2FaCode twoFACode={twoFACode} setTwoFACode={setTwoFACode} />
      </Form>
    )
  }).not.toThrow()
  })
})
