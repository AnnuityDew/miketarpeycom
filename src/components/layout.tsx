/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"
import LayoutWrapper from "../components/layout-wrapper"

type LayoutProps = { children: React.ReactNode; bgColor?: string }

const Layout = ({ children, bgColor = `#000000` }: LayoutProps) => (
  <React.Fragment>
    <LayoutWrapper>
      <Header bgColor="#222222" />
      <Main bgColor={bgColor}>{children}</Main>
      <Footer bgColor="#222222" />
      {/* The core Firebase JS SDK is always required and must be listed first. 
        Add SDKs for Firebase products that you want to use.
        https://firebase.google.com/docs/web/setup#available-libraries*/}
      <script src="/__/firebase/8.2.7/firebase-app.js"></script>
      <script src="/__/firebase/8.2.7/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>
    </LayoutWrapper>
  </React.Fragment>
)

export default Layout
