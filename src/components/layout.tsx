/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import LayoutWrapper from "../components/layout-wrapper"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode; bgColor?: string }

const Layout = ({ children, bgColor = `#000000` }: LayoutProps) => (
  <React.Fragment>
    <SEO />
    <LayoutWrapper>
      <Header bgColor="#222222" />
      <main
        sx={{
          p: [3, 3, 4],
          gridColumnStart: [1, 1, 1, 2, 2],
          backgroundColor: bgColor,
          height: `100%`,
          display: `flex`,
          padding: ["0", "0", "0", "0", "0"],
          svg: {
            fill: "#FFFFFF",
          },
          a: {
            textDecoration: "none",
            color: "#FFFFFF",
            "&:hover,&:focus": {
              color: "#FFCCCC",
            },
          },
        }}
      >
        {children}
      </main>
      <Footer bgColor="#222222" />
      {/* The core Firebase JS SDK is always required and must be listed first. 
        Add SDKs for Firebase products that you want to use.
        https://firebase.google.com/docs/web/setup#available-libraries
      <script src="/__/firebase/8.2.7/firebase-app.js"></script>
      <script src="/__/firebase/8.2.7/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>*/}
    </LayoutWrapper>
  </React.Fragment>
)

export default Layout
