// https://mui.com/components
import { FormControl, TextField } from '@mui/material'

import * as EmailValidator from 'email-validator'

const EMailAddressField = ({ eMailAddress, setEMailAddress }) => {
  const [badEMail, setBadEmail] = React.useState(false)
  const handleChange = (evt) => {
    setEMailAddress(evt.target.value)
    setBadEmail(!EmailValidator.validate(evt.target.value))
  }
  return (
    <FormControl variant="outlined">
      <TextField
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

export default EMailAddressField
