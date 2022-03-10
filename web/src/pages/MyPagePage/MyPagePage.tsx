import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { standard as QrCodeMock } from 'src/components/QrCode/QrCode.mock'


import RunQueryCell from 'src/components/RunQueryCell'
import RunMutationCell from 'src/components/RunMutationCell'
import QrCode from 'src/components/QrCode'
import InputPassword from 'src/components/InputPassword'
import PhoginForm from 'src/components/PhoginForm'

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
    <>
      <MetaTags title="MyPage" description="MyPage page" />

      <h1>MyPagePage</h1>
      <QrCode url={QrCodeMock()} />

      <RunQueryCell />
      <RunMutationCell onComplete={doComplete} onError={doError} />

      <PhoginForm />

      <p>
        My default route is named <code>myPage</code>, link to me with `
        <Link to={routes.myPage()}>MyPage</Link>`
      </p>
      <p>
        Find me in <code>./web/src/pages/MyPagePage/MyPagePage.tsx</code>{' '}
      </p>
    </>
  )
}

export default MyPagePage
