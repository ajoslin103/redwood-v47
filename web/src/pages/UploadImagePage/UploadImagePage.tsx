// https://mui.com/components
import { Box, Stack, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import VaxxifiLayout from 'src/layouts/VaxxifiLayout'

const UploadImagePage = () => {
  return (
    <VaxxifiLayout>
      <MetaTags title="UploadImage" description="UploadImage page" />
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
          Please upload an image of your proof
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 2,
          }}
        >
          Upload Image Here
        </Box>
      </Stack>
    </VaxxifiLayout>
  )
}

export default UploadImagePage
