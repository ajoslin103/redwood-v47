import { render } from '@redwoodjs/testing/web'

import InputDollars from './InputDollars'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InputDollars', () => {
  it('renders successfully', () => {
  const [currencyValue, setCurrencyValue] = React.useState('')
  expect(() => {
    render(
      <Form>
        <InputDollars currencyValue={currencyValue} setCurrencyValue={setCurrencyValue} />
      </Form>
    )
  }).not.toThrow()
  })
})
