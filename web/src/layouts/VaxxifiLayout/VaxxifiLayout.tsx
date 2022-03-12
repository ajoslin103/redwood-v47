// https://mui.com/components
import { Box, Container, Stack, Typography } from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider, } from '@mui/material/styles'

let theme = createTheme()
theme = responsiveFontSizes(theme)


type VaxxifiLayoutProps = {
  children?: React.ReactNode
}

const VaxxifiLayout = ({ children }: VaxxifiLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
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
              fontSize: '1rem',
              padding: 2,
            }}
          >
            Vaxxifi Systems, Inc.
          </Typography>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default VaxxifiLayout
