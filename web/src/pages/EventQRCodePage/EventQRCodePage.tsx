// https://mui.com/components
import { Stack, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import QrCode from 'src/components/QrCode'
import VaxxifiLayout from 'src/layouts/VaxxifiLayout'

const EventQRCodePage = () => {

  const QrCodeData = {
    url: 'https://github.com/thedavidprice/storybook-redwood-demo',
    invalid: '',
  }

  return (
    <VaxxifiLayout>
      <MetaTags title="EventQrCode" description="EventQrCode page" />
      <Stack spacing={2}>
        <Typography
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 2,
          }}
          variant="h3"
        >
          Scan this QRCode for admittance
        </Typography>
        <QrCode url={QrCodeData.url} invalid="" />
      </Stack>
    </VaxxifiLayout>
  )
}

export default EventQRCodePage
