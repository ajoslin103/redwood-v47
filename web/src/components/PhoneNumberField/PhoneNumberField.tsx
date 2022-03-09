// https://mui.com/components
import {
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material'

// https://gitlab.com/catamphetamine/libphonenumber-js
import {
  AsYouType, // Format as you type
  CountryCode, // the country codes
  isPossiblePhoneNumber, // only validates phone number length
  isValidPhoneNumber, // validates both phone number length and the actual phone number digits
  validatePhoneNumberLength, // validates both phone number length and the actual phone number digits.
  parsePhoneNumberFromString, // create the phoneNumber object: https://gitlab.com/catamphetamine/libphonenumber-js#phonenumber
  findPhoneNumbersInText, // Searches for phone numbers in text
} from 'libphonenumber-js'

const PhoneNumberFieldField = ({ phoneNumber, setPhoneNumber }) => {
  const [ formattedPhone, setFormattedPhone] = React.useState(phoneNumber)
  const [ backspacing, setBackspacing ] = React.useState(false)
  const checkForBackspace = (evt) => {
    setBackspacing(/backspace/i.test(evt.key))
  }
  const handleChange = (evt) => {
    const cleanedPhone = evt.target.value.replace(/[^+0123456789]/g, ''); console.debug(`cleanedPhone: ${cleanedPhone}`);
    const formattedPhone = new AsYouType('US').input(cleanedPhone); console.debug(`formattedPhone: ${formattedPhone}`);
    const lastFormatted = formattedPhone.slice(-1)[0]
    const reformattedCheck =
      backspacing && lastFormatted === ')'
        ? cleanedPhone.slice(0, -1)
        : cleanedPhone
    setPhoneNumber(reformattedCheck); console.debug(`cleanedPhone: ${reformattedCheck}`)
    setFormattedPhone(new AsYouType('US').input(reformattedCheck))
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

/**
 * oddly, these routines seem to work better being given a default country to guess with
 *
 * they stil come out with the right country if given a +CC
 */

export const validateGivenPhone = (
  phone: string,
  countryCode: string = 'US'
) => {
  const inputPhone = /^\+/.test(phone) ? phone : `+${phone}`
  const invalidPhoneBecause = validatePhoneNumberLength(
    inputPhone,
    countryCode as CountryCode
  )
  console.debug(`validatePhoneNumberLength(${phone}): ${invalidPhoneBecause}`)
  if (!invalidPhoneBecause) {
    const pNumber = parsePhoneNumberFromString(
      phone,
      countryCode as CountryCode
    )
    if (pNumber['country']) {
      console.debug( // don't pollute the log w/any metadata fields
        `parsePhoneNumberFromString pNumber: ${JSON.stringify(pNumber, (k, v) =>
          /metadata/.test(k) ? null : v
        )}`
      )
      return pNumber
    }
  }
  return null
}

export const formatGivenPhone = (phone: string, countryCode: string = 'US') => {
  const okNum = validateGivenPhone(phone, countryCode as CountryCode)
  return okNum
    ? okNum.country !== 'US'
      ? okNum.formatInternational()
      : okNum.formatNational()
    : phone
}

export const storeGivenPhone = (phone: string, countryCode: string = 'US') => {
  try {
    const okNum = validateGivenPhone(phone, countryCode as CountryCode)
    return okNum.number
  } catch (err) {
    return phone
  }
}

export const extractGivenPhone = (
  phone: string,
  countryCode: string = 'US'
) => {
  const okNumList = findPhoneNumbersInText(phone, countryCode as CountryCode)
  return okNumList.length ? okNumList[0].number : ''
}
