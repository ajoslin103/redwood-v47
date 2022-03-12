// https://mui.com/components
import { Box, Button, CardMedia, FormControl } from '@mui/material'

// https://www.npmjs.com/package/react-webcam
import Webcam from 'react-webcam'

const InputPhoto = ({ setImgSrc, width, disabled = false, }) => {
  const [capturedImage, setCapturedImage] = React.useState('')
  const [height, setHeight] = React.useState(0)
  const webcamRef = React.useRef(null)

  const handleUserMedia = () => {
    setTimeout(() => {
      setHeight(webcamRef.current.video.clientHeight)
    }, 1000)
  }

  const doDiscard = () => {
    setCapturedImage('')
    setImgSrc('')
  }

  const doCapture = () => {
    const imageData = webcamRef.current.getScreenshot()
    setCapturedImage(imageData)
    setImgSrc(imageData)
  }

  return !!capturedImage ? (
    <FormControl
      sx={{
        border: '1px solid lightgrey',
        borderRadius: 3,
        margin: 2,
        padding: 2,
        width,
      }}
      variant="outlined"
    >
      <CardMedia
        image={capturedImage}
        sx={{
          height,
          backgroundSize: 'contain !important',
        }}
      />
      <Button
        disabled={disabled}
        sx={{
          marginBottom: 0,
          marginRight: 1,
          marginLeft: 1,
          marginTop: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
        onClick={doDiscard}
      >
        Discard Picture
      </Button>
    </FormControl>
  ) : (
    <FormControl
      sx={{
        border: '1px solid lightgrey',
        borderRadius: 3,
        margin: 2,
        padding: 2,
        width,
      }}
      variant="outlined"
    >
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          facingMode: 'environment',
        }}
        onUserMedia={handleUserMedia}
      />
      <Button
        disabled={disabled}
        sx={{
          marginBottom: 0,
          marginRight: 1,
          marginLeft: 1,
          marginTop: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
        onClick={doCapture}
      >
        Take Picture
      </Button>
    </FormControl>
  )
}

export default InputPhoto
