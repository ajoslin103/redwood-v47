// https://mui.com/components
import { Box, Container, Stack, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import QrCode from 'src/components/QrCode'
import { standard as QrCodeMock } from 'src/components/QrCode/QrCode.mock'

const EventQRCodePage = () => {
  return (
    <>
      <MetaTags title="EventQrCode" description="EventQrCode page" />
      <Container>
        <Stack spacing={2}>
          <Typography
            sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
            }}
            variant="h3"
          >
            Scan this QRCode for admittance
          </Typography>
          <QrCode zoom={QrCodeMock().zoom} url={QrCodeMock().url} />
        </Stack>
      </Container>
    </>
  )
}

export default EventQRCodePage
