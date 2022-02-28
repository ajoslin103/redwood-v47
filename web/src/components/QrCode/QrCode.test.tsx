import { render } from '@redwoodjs/testing/web'

import QrCode from './QrCode'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const url = 'https://github.com/thedavidprice/storybook-redwood-demo'

describe('QrCode', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <QrCode url={url} />
      )
    }).not.toThrow()
  })
})
