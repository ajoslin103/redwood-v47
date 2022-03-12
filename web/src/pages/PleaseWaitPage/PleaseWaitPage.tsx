// https://mui.com/components
import { Box, CircularProgress, Stack, Typography } from '@mui/material'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import VaxxifiLayout from 'src/layouts/VaxxifiLayout'

const PleaseWaitPage = () => {

  const [bounced, setBounced] = React.useState(false)

  setTimeout(() => {
    const accepted = Math.random() > 0.5
    if (!bounced) {
      if (accepted) {
        setBounced(true)
        navigate(routes.eventPass())
      } else {
        setBounced(true)
        navigate(routes.uploadImage())
      }
    }
  }, 750)

  return (
    <VaxxifiLayout>
      <MetaTags title="PleaseWait" description="PleaseWait page" />
      <Stack
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
        spacing={2}
      >
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
          Please wait while we process your request
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 2,
          }}
        >
          <CircularProgress size={128} />
        </Box>
      </Stack>
    </VaxxifiLayout>
  )
}

export default PleaseWaitPage
