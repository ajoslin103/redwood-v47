
// https://www.npmjs.com/package/qrcode.react
const QRCode = require('qrcode.react')

const QrCode = ({ url = '' }) => {
  console.debug(`QrCode url: ${url}`)
  const clickQRCode = () => {
    window.open(url, '')
  }
  return (
      <span onClick={clickQRCode}>
        <QRCode value={url} />
      </span>
  )
}

export default QrCode
