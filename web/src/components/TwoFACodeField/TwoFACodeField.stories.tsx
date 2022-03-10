import TwoFACodeField from './TwoFACodeField'

import { Form } from '@redwoodjs/forms'

export const generated = () => {
  const [twoFACode, setTwoFACode] = React.useState('')
  return (
    <Form>
      <TwoFACodeField twoFACode={twoFACode} setTwoFACode={setTwoFACode} />
    </Form>
  )
}

export default { title: 'Components/TwoFACodeField' }
