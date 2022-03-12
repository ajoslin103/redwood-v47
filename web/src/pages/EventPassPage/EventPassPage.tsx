// https://mui.com/components
import { Box, Button, Stack, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import QrCode from 'src/components/QrCode'
import VaxxifiLayout from 'src/layouts/VaxxifiLayout'

const EventPassPage = () => {
  const QrCodeData = {
    size: 256,
    url: 'https://github.com/thedavidprice/storybook-redwood-demo',
  }

  const genQrCodeUrl = () =>
    `${QrCodeData.url}?qrCode=${Math.random()}`

  const [qrCodeUrl, setQrCodeUrl] = React.useState(genQrCodeUrl())
  const [qrCodeSize, setQrCodeSize] = React.useState(QrCodeData.size)
  const [thirtyPcnt, setThirtyPcnt] = React.useState('')

  const handleRefresh = () => {
    setQrCodeUrl(genQrCodeUrl())
    setThirtyPcnt(
      Math.random() > 0.666
      ? 'Sorry, you are not cleared for this event.'
      : ''
    )
  }

  return (
    <VaxxifiLayout>
      <MetaTags title="EventPass" description="EventPass page" />
      <Stack
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
        spacing={2}
      >
        <Typography
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 2,
          }}
          variant="h3"
        >
          Event Single-Use Pass
        </Typography>
        <QrCode size={qrCodeSize} url={qrCodeUrl} invalid={thirtyPcnt} />
        <Typography
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 2,
          }}
          variant="body1"
        >
          This pass may only be scanned once, and then must be refreshed
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button
            sx={{
              width: qrCodeSize,
            }}
            onClick={handleRefresh}
            color="primary"
            variant="contained"
          >
            Refresh My Pass
          </Button>
        </Box>
      </Stack>
    </VaxxifiLayout>
  )
}

export default EventPassPage
