import InputPassword from './InputPassword'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [password, setPassword] = React.useState('')
  return (
    <Form>
      <InputPassword password={password} setPassword={setPassword} />
    </Form>
  )
}

export default { title: 'Components/InputPassword' }
