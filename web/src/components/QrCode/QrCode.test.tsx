import { render } from '@redwoodjs/testing/web'

import QrCode from './QrCode'
import { standard } from './QrCode.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const standardMock = standard()

describe('QrCode', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <QrCode
          url={standardMock.url}
          invalid={standardMock.invalid}
        />
      )
    }).not.toThrow()
  })
})
