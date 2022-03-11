import InputPhone from './InputPhone'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('')
  return (
    <Form>
      <InputPhone
        disabled={false}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <InputPhone
        disabled={true}
        phoneNumber={'disabled'}
        setPhoneNumber={setPhoneNumber}
      />
    </Form>
  )
}

export default { title: 'Components/InputPhoneField' }
