import InputPhone from './InputPhone'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('')
  return (
    <Form>
      <InputPhone phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
    </Form>
  )
}

export default { title: 'Components/InputPhoneField' }
