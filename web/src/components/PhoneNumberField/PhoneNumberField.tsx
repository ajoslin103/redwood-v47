// https://mui.com/components
import {
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material'

// https://gitlab.com/catamphetamine/libphonenumber-js
import {
  AsYouType, // Format as you type
  // CountryCode, // the country codes
  // isPossiblePhoneNumber, // only validates phone number length
  // isValidPhoneNumber, // validates both phone number length and the actual phone number digits
  // validatePhoneNumberLength, // validates both phone number length and the actual phone number digits.
  // parsePhoneNumberFromString, // create the phoneNumber object: https://gitlab.com/catamphetamine/libphonenumber-js#phonenumber
  // findPhoneNumbersInText, // Searches for phone numbers in text
} from 'libphonenumber-js'

const PhoneNumberFieldField = ({ phoneNumber, setPhoneNumber }) => {
  const [ formattedPhone, setFormattedPhone] = React.useState(phoneNumber)
  const [ backspacing, setBackspacing ] = React.useState(false)
  const checkForBackspace = (evt) => {
    setBackspacing(/backspace/i.test(evt.key))
  }
  const handleChange = (evt) => {
    const phoneRaw = evt.target.value.replace(/[^+0123456789]/g, '');
    const finalCleaned = (backspacing && phoneNumber === phoneRaw) ? phoneRaw.slice(0,-1) : phoneRaw;
    setPhoneNumber(finalCleaned);
    setFormattedPhone(new AsYouType('US').input(finalCleaned))
  }
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-phonenumberfield">Phone Number</InputLabel>
      <OutlinedInput
        id="outlined-phonenumberfield"
        value={formattedPhone}
        onChange={handleChange}
        onKeyDown={checkForBackspace}
        label="PhoneNumberField"
      />
    </FormControl>
  )
}

export default PhoneNumberFieldField
