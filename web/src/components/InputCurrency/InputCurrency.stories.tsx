import InputCurrency from './InputCurrency'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [eMailAddress, setEMailAddress] = React.useState('')
  return (
    <Form>
      <InputCurrency eMailAddress={eMailAddress} setEMailAddress={setEMailAddress} />
    </Form>
  )
}

export default { title: 'Components/InputCurrency' }
