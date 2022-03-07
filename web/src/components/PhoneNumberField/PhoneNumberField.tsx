// https://mui.com/components
import { TextField } from '@mui/material'

const PhoneNumberField = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('')
  return (
    <TextField
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      label="Phone Number"
    />
  )
}

export default PhoneNumberField
