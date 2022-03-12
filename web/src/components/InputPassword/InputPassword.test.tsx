import { render } from '@redwoodjs/testing/web'

import InputPassword from './InputPassword'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InputPassword', () => {
  it('renders successfully', () => {
  const [password, setPassword] = React.useState('')
  expect(() => {
    render(
      <Form>
        <InputPassword password={password} setPassword={setPassword} />
      </Form>
    )
  }).not.toThrow()
  })
})
