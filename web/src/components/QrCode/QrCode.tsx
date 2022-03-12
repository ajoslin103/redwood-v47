// https://mui.com/components
import { Box, Typography } from '@mui/material'

// https://www.npmjs.com/package/qrcode.react
const QRCode = require('qrcode.react')

const QrCode = ({ url = '', size = 128, invalid = '' }) => {
  console.debug(`QrCode url: ${url}`)
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
          fontSize: size / 6,
          width: size,
          height: size,
        }}
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
      <QRCode onClick={clickQRCode} size={size} value={url} />
    </Box>
  )
}

export default QrCode
