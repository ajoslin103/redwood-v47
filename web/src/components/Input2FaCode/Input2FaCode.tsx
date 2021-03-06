// https://mui.com/components
import {
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material'

const Input2FaCode = ({ twoFACode, setTwoFACode, disabled = false }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel>2FACode</InputLabel>
      <OutlinedInput
        value={twoFACode}
        disabled={disabled}
        onChange={(e) =>
          setTwoFACode(e.target.value.replace(/[^0123456789]/g, ''))
        }
        label="2FACode"
        type="tel"
      />
    </FormControl>
  )
}

export default Input2FaCode
