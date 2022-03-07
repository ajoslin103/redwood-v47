// https://mui.com/components
import { Button, Stack, TextField } from '@mui/material'

// https://www.npmjs.com/package/javascript-stringify
import { stringify } from 'javascript-stringify'

import PasswordField from 'src/components/PasswordField'

const PhoginForm = () => {
  const [password, setPassword] = React.useState('')
  const handleSubmit = (event: React.SyntheticEvent) => {
    console.debug(`password: ${password}`)
  }
  return (
    <form>
      <Stack spacing={2} direction="column">
        <TextField label="Phone Number" name="username" />
        <PasswordField password={password} setPassword={setPassword} />
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Login
        </Button>
      </Stack>
    </form>
  )
}

export default PhoginForm
