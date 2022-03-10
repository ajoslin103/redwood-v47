// https://mui.com/components
import { Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EventQRCodePage = () => {
  return (
    <>
      <MetaTags title="EventQrCode" description="EventQrCode page" />

      <Typography variant="h1">EventQRCodePage</Typography>

      <Typography variant="h1">Purchase your Event's QRCode here</Typography>

    </>
  )
}

export default EventQRCodePage
