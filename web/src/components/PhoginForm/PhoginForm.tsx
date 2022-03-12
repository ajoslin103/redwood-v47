
import { Form, TextField, Label, FieldError, Submit } from '@redwoodjs/forms'

// https://mui.com/components
import { Button, Stack } from '@mui/material'

import InputPassword from 'src/components/InputPassword'
import InputPhone from 'src/components/InputPhone'

const PhoginForm = ({ handleSubmit }) => {
  const [password, setPassword] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [enteringPassword, setEnteringPassword] = React.useState(false)
  const handleLogin = (event: React.SyntheticEvent) => {
    const values = {
      password,
      phoneNumber,
    }
    handleSubmit(values);
  }
  const handleSend2FACode = () => {
    setEnteringPassword(true)
  }
  return (
    <form>
      <Stack spacing={2} direction="column">
        <InputPhone
          disabled={enteringPassword}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
        {!enteringPassword && (
          <Button
            onClick={handleSend2FACode}
            color="primary"
            variant="contained"
          >
            Send Me A Code
          </Button>
        )}
        {enteringPassword && (
          <InputPassword password={password} setPassword={setPassword} />
        )}
        {enteringPassword && (
          <Button onClick={handleLogin} color="primary" variant="contained">
            Login
          </Button>
        )}
      </Stack>
    </form>
  )
}

export default PhoginForm
