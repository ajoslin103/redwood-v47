// https://mui.com/components
import { Box } from '@mui/material'

// https://www.npmjs.com/package/qrcode.react
const QRCode = require('qrcode.react')

const QrCode = ({ url = '', size = 128 }) => {
  console.debug(`QrCode url: ${url}`)
  const clickQRCode = () => {
    window.open(url, '')
  }
  return (
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
