// https://mui.com/components
import { Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import VaxxifiLayout from 'src/layouts/VaxxifiLayout'

const EventQRCodePage = () => {
  return (
    <VaxxifiLayout>
      <MetaTags title="EventQrCode" description="EventQrCode page" />
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
        Please use a Scratch & Sniff test for admittance
      </Typography>
    </VaxxifiLayout>
  )
}

export default EventQRCodePage
