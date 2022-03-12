// https://mui.com/components
import { FormControl, TextField } from '@mui/material'

// https://www.npmjs.com/package/validator
import validator from 'validator'

const InputEmail = ({ eMailAddress, setEMailAddress, disabled = false }) => {
  const [badEMail, setBadEmail] = React.useState(false)
  const handleChange = (evt) => {
    setEMailAddress(evt.target.value)
    setBadEmail(!validator.isEmail(evt.target.value))
  }
  return (
    <FormControl variant="outlined">
      <TextField
        disabled={disabled}
        error={badEMail}
        value={eMailAddress}
        onChange={handleChange}
        helperText={badEMail ? 'Invalid EMailAddress' : ''}
        label="EMailAddress"
        type="email"
      />
    </FormControl>
  )
}

export default InputEmail
