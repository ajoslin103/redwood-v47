import { render } from '@redwoodjs/testing/web'

import PasswordField from './PasswordField'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PasswordField', () => {
  it('renders successfully', () => {
  const [password, setPassword] = React.useState('')
  expect(() => {
    render(
      <Form>
        <PasswordField password={password} setPassword={setPassword} />
      </Form>
    )
  }).not.toThrow()
  })
})
