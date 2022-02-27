import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import RunQueryCell from 'src/components/RunQueryCell'
import RunMutationCell from 'src/components/RunMutationCell'

const MyPagePage = () => {

  const doComplete = () => {}

  const doError = () => {}

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
    </>
  )
}

export default MyPagePage
