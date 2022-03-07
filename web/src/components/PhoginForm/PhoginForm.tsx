
import { Form, TextField, Label, FieldError, Submit } from '@redwoodjs/forms'

// https://mui.com/components
import { Button, Stack, TextField as MuiTField } from '@mui/material'

import PasswordField from 'src/components/PasswordField'

const PhoginForm = () => {

  const onSubmit = (values) => {
    console.debug(`onSubmit values: ${JSON.stringify(values)}`)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Stack spacing={2} direction="column">
        <TextField name="username" />
        <Label name="name" className="label" errorClassName="label error" />
        <TextField
          name="name"
          className="input"
          errorClassName="input error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error-message" />

        <Label name="email" className="label" errorClassName="label error" />
        <TextField
          name="email"
          className="input"
          errorClassName="input error"
          // validation={{
          //   required: true,
          //   pattern: {
          //     value: /[^@]+@[^\.]+\..+/,
          //   },
          // }}
        />
        <FieldError name="email" className="error-message" />

        <Submit className="button">Save</Submit>
      </Stack>
    </Form>
  )
}

export default PhoginForm
