// https://mui.com/components
import { Stack, Typography } from '@mui/material'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import QrCode from 'src/components/QrCode'
import VaxxifiLayout from 'src/layouts/VaxxifiLayout'

const EventQRCodePage = () => {

  const QrCodeData = {
    url: 'https://github.com/thedavidprice/storybook-redwood-demo',
    invalid: '',
  }

  const handleClick = () => {
    navigate(routes.phogin())
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
            textAlign: 'center',
            padding: 2,
          }}
          variant="h3"
        >
          Scan this QRCode for admittance
        </Typography>
        <QrCode handleClick={handleClick} url={QrCodeData.url} invalid="" />
      </Stack>
    </VaxxifiLayout>
  )
}

export default EventQRCodePage
