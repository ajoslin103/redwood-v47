// https://mui.com/components
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

// https://www.npmjs.com/package/qrcode.react
const QRCode = require('qrcode.react')

const QrCode = ({ url = '', invalid = '' }) => {
  console.debug(`QrCode url: ${url}`)
  const theme = useTheme()
  const size = useMediaQuery(theme.breakpoints.up('sm')) ? 256 : 128
  const clickQRCode = () => {
    window.open(url, '')
  }
  return !!invalid ? (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: size,
          height: size,
        }}
        variant="h5"
      >
        {invalid}
      </Typography>
    </Box>
  ) : (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <QRCode size={size} onClick={clickQRCode} value={url} />
    </Box>
  )
}

export default QrCode
