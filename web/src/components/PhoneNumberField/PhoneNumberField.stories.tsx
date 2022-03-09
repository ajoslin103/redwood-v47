import PhoneNumberField from './PhoneNumberField'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('')
  return (
    <Form>
      <PhoneNumberField phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
    </Form>
  )
}

export default { title: 'Components/PhoneNumberFieldField' }
