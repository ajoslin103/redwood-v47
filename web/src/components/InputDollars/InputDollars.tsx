
// https://mui.com/components
import {
  FormControl,
  TextField,
} from '@mui/material'

// https://www.npmjs.com/package/validator
import validator from 'validator'

// hasn't updated to mui5...
// import CurrencyTextField from '@unicef/material-ui-currency-textfield'

const InputDollars = ({ currencyValue, setCurrencyValue }) => {
  const [badCurrency, setBadCurrency] = React.useState(false)
  const handleChange = (evt) => {
    setCurrencyValue(evt.target.value)
    setBadCurrency(!validator.isCurrency(evt.target.value))
  }
  return (
    <FormControl variant="outlined">
      <TextField
        error={badCurrency}
        id="outlined-currencyvaluefield"
        helperText={badCurrency ? 'Invalid Amount' : ''}
        value={currencyValue}
        onChange={handleChange}
        label="Payment"
        type="tel"
      />
    </FormControl>
  )
}

export default InputDollars
