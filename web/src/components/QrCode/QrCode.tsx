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
      onClick={clickQRCode}
    >
      <Typography
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: Math.floor(size / 5),
          padding: 2,
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
      onClick={clickQRCode}
    >
      <QRCode size={size} value={url} />
    </Box>
  )
}

export default QrCode
