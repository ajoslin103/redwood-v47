import { render } from '@redwoodjs/testing/web'

import InputPhoto from './InputPhoto'
import { standard } from './InputPhoto.mock'

import { Form } from '@redwoodjs/forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const { setImgSrc, disabled, width } = standard()

describe('InputPhoto', () => {
  it('renders successfully', () => {
  expect(() => {
    render(
      <InputPhoto
        setImgSrc={setImgSrc}
        disabled={disabled}
        width={width}
      />
    )
  }).not.toThrow()
  })
})
