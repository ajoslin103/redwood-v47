
import { TextField, Label, FieldError } from '@redwoodjs/forms'

const PhoneNumberInput = () => {
  return (
    <>
      <Label name="Phone Number" className="label" errorClassName="label error" />
      <TextField
        name="phone-number"
        className="input"
        errorClassName="input error"
        validation={{ required: true }}
      />
      <FieldError name="name" className="error-message" />
    </>
  )
}

export default PhoneNumberInput
