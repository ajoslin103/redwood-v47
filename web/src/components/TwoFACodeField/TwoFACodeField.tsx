// https://mui.com/components
import {
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material'

const TwoFACodeField = ({ twoFACode, setTwoFACode }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel>2FACode</InputLabel>
      <OutlinedInput
        value={twoFACode}
        onChange={(e) => setTwoFACode(e.target.value.replace(/[^0123456789]/g,''))}
        label="2FACode"
      />
    </FormControl>
  )
}

export default TwoFACodeField
