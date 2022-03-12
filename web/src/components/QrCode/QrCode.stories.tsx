// https://mui.com/components
import { Stack } from '@mui/material'

import QrCode from './QrCode'
import { standard } from './QrCode.mock'

export const generated = () => {
  const standardMock = standard()
  return (
    <Stack>
      <QrCode
        url={standardMock.url}
        invalid={standardMock.invalid}
      />
      <QrCode
        url={standardMock.url}
        invalid={'Sorry, you are not cleared for this event.'}
      />
    </Stack>
  )
}

export default { title: 'Components/QrCode' }
