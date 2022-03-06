// https://mui.com/components
import {
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
} from '@mui/material'

import ShowPasswod from '@mui/icons-material/Visibility'
import HidePassword from '@mui/icons-material/VisibilityOff'

const PasswordField = () => {
  const [password, setPassword] = React.useState('')
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
              {showPassword ? <HidePassword /> : <ShowPasswod />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  )
}

export default PasswordField
