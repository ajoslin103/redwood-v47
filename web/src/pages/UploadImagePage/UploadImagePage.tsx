// https://mui.com/components
import { Box, Button, Stack, Typography } from '@mui/material'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import InputPhoto from 'src/components/InputPhoto'
import VaxxifiLayout from 'src/layouts/VaxxifiLayout'

const UploadImagePage = () => {
  const [disabled, setDisabled] = React.useState(false)
  const [imgSrc, setImgSrc] = React.useState('')
  const [width, setWidth] = React.useState(0)
  const titleRef = React.useRef(null)

  React.useEffect(() => {
    setWidth(titleRef.current.clientWidth)
  })

  const handleUpload = () => {
    navigate(routes.eventPass())
  }

  return (
    <VaxxifiLayout>
      <MetaTags title="UploadImage" description="UploadImage page" />
      <Stack
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
        spacing={1}
      >
        <Typography
          ref={titleRef}
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 2,
          }}
          variant="h3"
        >
          Please upload an image of your proof
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <InputPhoto setImgSrc={setImgSrc} disabled={disabled} width={width} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'end',
          }}
        >
          <Button disabled={!imgSrc || disabled} onClick={handleUpload}>
            Upload Image
          </Button>
        </Box>
      </Stack>
    </VaxxifiLayout>
  )
}

export default UploadImagePage
