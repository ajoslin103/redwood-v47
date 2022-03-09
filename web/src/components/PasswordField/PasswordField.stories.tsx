import PasswordField from './PasswordField'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [password, setPassword] = React.useState('')
  return (
    <Form>
      <PasswordField password={password} setPassword={setPassword} />
    </Form>
  )
}

export default { title: 'Components/PasswordField' }
