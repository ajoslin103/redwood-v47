import EMailAddressField from './EMailAddressField'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [eMailAddress, setEMailAddress] = React.useState('')
  return (
    <Form>
      <EMailAddressField eMailAddress={eMailAddress} setEMailAddress={setEMailAddress} />
    </Form>
  )
}

export default { title: 'Components/EMailAddressField' }
