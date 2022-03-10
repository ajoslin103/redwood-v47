// https://mui.com/components
import { Button, Stack } from '@mui/material'

import PasswordField from 'src/components/PasswordField'
import TwoFACodeField from 'src/components/TwoFACodeField'
import PhoneNumberField from 'src/components/PhoneNumberField'
import EMailAddressField from 'src/components/EMailAddressField'

import InputDollars from 'src/components/InputDollars'

const PhoginForm = () => {
  const [password, setPassword] = React.useState('')
  const [twoFACode, setTwoFACode] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [eMailAddress, setEMailAddress] = React.useState('')
  const [currencyValue, setCurrencyValue] = React.useState('')
  const handleSubmit = (event: React.SyntheticEvent) => {
    const values = { password, phoneNumber }
    console.debug(`values: ${JSON.stringify(values)}`)
  }
  return (
    <form>
      <Stack spacing={2} direction="column">
        <InputDollars currencyValue={currencyValue} setCurrencyValue={setCurrencyValue} />
        <EMailAddressField eMailAddress={eMailAddress} setEMailAddress={setEMailAddress} />
        <PhoneNumberField phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
        <PasswordField password={password} setPassword={setPassword} />
        <TwoFACodeField twoFACode={twoFACode} setTwoFACode={setTwoFACode} />
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Login
        </Button>
      </Stack>
    </form>
  )
}

export default PhoginForm
