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
    </LayoutWrapper>
  </React.Fragment>
)

export default Layout
