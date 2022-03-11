// https://mui.com/components
import { Box, Button, Container, Stack, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import QrCode from 'src/components/QrCode'

const EventPassPage = () => {
  const QrCodeData = {
    size: 256,
    url: 'https://github.com/thedavidprice/storybook-redwood-demo',
  }

  const genQrCodeUrl = () =>
    `${QrCodeData.url}?qrCode=${Math.random()}`

  const [qrCodeUrl, setQrCodeUrl] = React.useState(genQrCodeUrl())
  const [qrCodeSize, setQrCodeSize] = React.useState(QrCodeData.size)

  const handleRefresh = () => {
    setQrCodeUrl(genQrCodeUrl())
  }

  return (
    <>
      <MetaTags title="EventPass" description="EventPass page" />
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
            <QrCode size={qrCodeSize} url={qrCodeUrl} />
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

export default EventPassPage
