import { render } from '@redwoodjs/testing/web'

import TwoFACodeField from './TwoFACodeField'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TwoFACodeField', () => {
  it('renders successfully', () => {
  const [twoFACode, setTwoFACode] = React.useState('')
  expect(() => {
    render(
      <Form>
        <TwoFACodeField twoFACode={twoFACode} setTwoFACode={setTwoFACode} />
      </Form>
    )
  }).not.toThrow()
  })
})
