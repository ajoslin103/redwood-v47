import * as React from 'react'

import InputPhoto from './InputPhoto'
import { standard } from './InputPhoto.mock'

const { setImgSrc, disabled, width } = standard()

export const generated = () => {
  return (
    <InputPhoto
      setImgSrc={setImgSrc}
      disabled={disabled}
      width={width}
    />
  )
}

export default { title: 'Components/InputPhoto' }
