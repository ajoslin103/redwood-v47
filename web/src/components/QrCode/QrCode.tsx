// https://mui.com/components
import { Box } from '@mui/material'

// https://www.npmjs.com/package/qrcode.react
const QRCode = require('qrcode.react')

const QrCode = ({ url = '', zoom = 1.0 }) => {
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
        zoom: zoom,
      }}
      onClick={clickQRCode}
    >
      <QRCode value={url} />
    </Box>
  )
}

export default QrCode
