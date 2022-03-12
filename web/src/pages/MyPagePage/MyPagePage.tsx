// https://mui.com/components
import { Stack, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { standard as QrCodeMock } from 'src/components/QrCode/QrCode.mock'

import RunQueryCell from 'src/components/RunQueryCell'
import RunMutationCell from 'src/components/RunMutationCell'
import QrCode from 'src/components/QrCode'
import InputPassword from 'src/components/InputPassword'
import PhoginForm from 'src/components/PhoginForm'
import VaxxifiLayout from 'src/layouts/VaxxifiLayout'

const MyPagePage = () => {
  const [data, setData] = React.useState('')
  const [error, setError] = React.useState('')

  const doComplete = (result) => {
    setData(result)
  }

  const doError = (err) => {
    setError(err)
  }

  return (
    <VaxxifiLayout>
      <MetaTags title="MyPage" description="MyPage page" />
      <Stack>
        <h1>MyPagePage</h1>
        <QrCode url={QrCodeMock().url} />

        <RunQueryCell />
        <RunMutationCell onComplete={doComplete} onError={doError} />

        <PhoginForm />
      </Stack>
    </VaxxifiLayout>
  )
}

export default MyPagePage
