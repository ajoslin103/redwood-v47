// https://mui.com/components
import { Box, Container, Stack, Typography } from '@mui/material'

type VaxxifiLayoutProps = {
  children?: React.ReactNode
}

const VaxxifiLayout = ({ children }: VaxxifiLayoutProps) => {
  return (
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
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {children}
        </Box>
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
  )
}

export default VaxxifiLayout
