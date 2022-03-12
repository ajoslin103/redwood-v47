// https://mui.com/components
import { Stack, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PhoginForm from 'src/components/PhoginForm'
import VaxxifiLayout from 'src/layouts/VaxxifiLayout'

const PhoginPage = () => {
  const PhoginData = {
    size: 256,
    url: 'https://github.com/thedavidprice/storybook-redwood-demo',
  }

  return (
    <VaxxifiLayout>
      <MetaTags title="PhoginPage" description="PhoginPage page" />
      <Stack
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          width: '350px',
          marginLeft: 'auto',
          marginRight: 'auto',
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
          Login to check your status
        </Typography>
        <PhoginForm />
        <Typography
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 2,
          }}
          variant="body1"
        >
          We will text you a code Please enter it as your Password
        </Typography>
      </Stack>
    </VaxxifiLayout>
  )
}

export default PhoginPage
