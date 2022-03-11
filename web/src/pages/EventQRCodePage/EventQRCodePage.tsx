// https://mui.com/components
import { Box, Container, Stack, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import QrCode from 'src/components/QrCode'

const EventQRCodePage = () => {

  const QrCodeData = {
    size: 256,
    url: 'https://github.com/thedavidprice/storybook-redwood-demo',
  }

  return (
    <>
      <MetaTags title="EventQrCode" description="EventQrCode page" />
      <Container
        sx={{
          height: '100vw',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            height: '100%',
            padding: 2,
          }}
          spacing={2}
        >
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
            <QrCode size={QrCodeData.size} url={QrCodeData.url} />
          </Stack>
          <Typography
            sx={{
              display: 'flex',
              alignContent: 'end',
              justifyContent: 'end',
              padding: 2,
            }}
            variant="h6"
          >
            Vaxxifi Systems, Inc.
          </Typography>
        </Stack>
      </Container>
    </>
  )
}

export default EventQRCodePage
