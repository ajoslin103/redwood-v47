// https://mui.com/components
import {
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
} from '@mui/material'

import ShowPassword from '@mui/icons-material/Visibility'
import HidePassword from '@mui/icons-material/VisibilityOff'

const InputPassword = ({ password, setPassword }) => {
  const [showPassword, setShowPassword] = React.useState(false)
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
            >
              {showPassword ? <HidePassword /> : <ShowPassword />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  )
}

export default InputPassword
