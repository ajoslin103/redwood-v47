import InputEmail from './InputEmail'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [eMailAddress, setEMailAddress] = React.useState('')
  return (
    <Form>
      <InputEmail eMailAddress={eMailAddress} setEMailAddress={setEMailAddress} />
    </Form>
  )
}

export default { title: 'Components/InputEmail' }
