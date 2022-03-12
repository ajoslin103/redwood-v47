// https://mui.com/components/cards/#media
import CardMedia from '@mui/material/CardMedia'

interface Props {
  src: string;
  height?: string;
  width?: string;
}

const ImageDisplay = ({ src, width = '3rem', height = '3rem' }: Props) => {
  return <CardMedia
    image={src}
    sx={{
      width,
      height,
    }}
  />
}

export default ImageDisplay
