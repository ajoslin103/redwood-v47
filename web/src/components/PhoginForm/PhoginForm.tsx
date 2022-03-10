// https://mui.com/components
import { Button, Stack } from '@mui/material'

import InputPassword from 'src/components/InputPassword'
import Input2FaCode from 'src/components/Input2FaCode'
import InputPhone from 'src/components/InputPhone'
import InputEmail from 'src/components/InputEmail'

import InputDollars from 'src/components/InputDollars'

const PhoginForm = () => {
  const [password, setPassword] = React.useState('')
  const [twoFACode, setTwoFACode] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [eMailAddress, setEMailAddress] = React.useState('')
  const [currencyValue, setCurrencyValue] = React.useState('')
  const handleSubmit = (event: React.SyntheticEvent) => {
    const values = {
      password,
      twoFACode,
      phoneNumber,
      eMailAddress,
      currencyValue,
    }
    console.debug(`values: ${JSON.stringify(values)}`)
  }
  return (
    <form>
      <Stack spacing={2} direction="column">
        <InputDollars currencyValue={currencyValue} setCurrencyValue={setCurrencyValue} />
        <InputEmail eMailAddress={eMailAddress} setEMailAddress={setEMailAddress} />
        <InputPhone phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
        <InputPassword password={password} setPassword={setPassword} />
        <Input2FaCode twoFACode={twoFACode} setTwoFACode={setTwoFACode} />
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Login
        </Button>
      </Stack>
    </form>
  )
}

export default PhoginForm
