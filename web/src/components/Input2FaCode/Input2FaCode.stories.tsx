import Input2FaCode from './Input2FaCode'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [twoFACode, setTwoFACode] = React.useState('')
  return (
    <Form>
      <Input2FaCode twoFACode={twoFACode} setTwoFACode={setTwoFACode} />
    </Form>
  )
}

export default { title: 'Components/Input2FaCode' }
