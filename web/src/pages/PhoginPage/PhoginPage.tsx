// https://mui.com/components
import { Box, Container, Stack, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PhoginForm from 'src/components/PhoginForm'

const PhoginPage = () => {
  const PhoginData = {
    size: 256,
    url: 'https://github.com/thedavidprice/storybook-redwood-demo',
  }

  return (
    <>
      <MetaTags title="PhoginPage" description="PhoginPage page" />
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

export default PhoginPage
