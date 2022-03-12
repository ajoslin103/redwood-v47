// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={EventQRCodePage} name="home" />
      <Route path="/upload-image" page={UploadImagePage} name="uploadImage" />
      <Route path="/please-wait" page={PleaseWaitPage} name="pleaseWait" />
      <Route path="/event-pass" page={EventPassPage} name="eventPass" />
      <Route path="/sniff" page={SniffPage} name="sniff" />
      <Route path="/phogin" page={PhoginPage} name="phogin" />
      <Route path="/event-qr-code" page={EventQRCodePage} name="eventQrCode" />
      <Route path="/my-page" page={MyPagePage} name="myPage" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
