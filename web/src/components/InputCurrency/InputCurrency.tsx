// https://mui.com/components
import { FormControl, TextField } from '@mui/material'

// hasn't updated to mui5...
// import CurrencyTextField from '@unicef/material-ui-currency-textfield'

// we're going to have to copy the phone input field and format for currency
// we're going to have to copy the phone input field and format for currency
// we're going to have to copy the phone input field and format for currency
// we're going to have to copy the phone input field and format for currency
// we're going to have to copy the phone input field and format for currency
// we're going to have to copy the phone input field and format for currency

const InputCurrency = ({ amountCurrency, setAmountCurrency }) => {
  return (
    <FormControl variant="outlined">
      <TextField
        label="Amount"
        variant="standard"
        value={amountCurrency}
        // currencySymbol="$"
        // outputFormat="string"
        onChange={(e)=> setAmountCurrency(e.target.value)}
      />
    </FormControl>
  );
}

export default InputCurrency
