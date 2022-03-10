// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => {
    const [currencyValue, setCurrencyValue] = React.useState('')
  return {
    currencyValue,
    setCurrencyValue,
  }
}