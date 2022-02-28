import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import RunQueryCell from 'src/components/RunQueryCell'
import RunMutationCell from 'src/components/RunMutationCell'

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
      <p>
        Find me in <code>./web/src/pages/MyPagePage/MyPagePage.tsx</code>
      </p>

      <RunQueryCell />
      <RunMutationCell onComplete={doComplete} onError={doError} />

      <p>
        My default route is named <code>myPage</code>, link to me with `
        <Link to={routes.myPage()}>MyPage</Link>`
      </p>

      {/* <p>data: {JSON.stringify(data, null, 2)}</p> */}
      {/* <p>error: {error}</p> */}

    </>
  )
}

export default MyPagePage
