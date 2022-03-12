import InputDollars from './InputDollars'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [currencyValue, setCurrencyValue] = React.useState('')
  return (
    <Form>
      <InputDollars currencyValue={currencyValue} setCurrencyValue={setCurrencyValue} />
    </Form>
  )
}

export default { title: 'Components/InputDollars' }
