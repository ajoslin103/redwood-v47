// https://mui.com/components
import {
  Button,
  Stack,
  TextField,
} from '@mui/material'

import { Form } from '@redwoodjs/forms'

import PasswordField from 'src/components/PasswordField'

const PhoginForm = () => {

  return (
    <Form>
      <Stack spacing={2} direction="column">
        <TextField label="Phone Number" name="username" />
        <PasswordField />
        <Button color="primary" variant="contained">
          Login
        </Button>
      </Stack>
    </Form>
  )
}

export default PhoginForm
