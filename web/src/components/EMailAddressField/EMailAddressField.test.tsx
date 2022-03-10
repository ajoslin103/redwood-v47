import { render } from '@redwoodjs/testing/web'

import EMailAddressField from './EMailAddressField'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EMailAddressField', () => {
  it('renders successfully', () => {
  const [eMailAddress, setEMailAddress] = React.useState('')
  expect(() => {
    render(
      <Form>
        <EMailAddressField eMailAddress={eMailAddress} setEMailAddress={setEMailAddress} />
      </Form>
    )
  }).not.toThrow()
  })
})
