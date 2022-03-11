// https://mui.com/components
import { Container, Stack, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EventQRCodePage = () => {
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
              Please use a Scratch & Sniff test for admittance
            </Typography>
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
