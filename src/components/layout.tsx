import React from "react"
import SEO from "./seo"
import NewHeader from "./header"

interface LayoutProps {
  h1text: string
  children: React.ReactNode
}

const NewLayout = ({ h1text, children }: LayoutProps) => (
  <React.Fragment>
    <SEO />
    <NewHeader h1text={h1text} />
    <main>{children}</main>
    {/* The core Firebase JS SDK is always required and must be listed first. 
        Add SDKs for Firebase products that you want to use.
        https://firebase.google.com/docs/web/setup#available-libraries
      <script src="/__/firebase/8.2.7/firebase-app.js"></script>
      <script src="/__/firebase/8.2.7/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>*/}
  </React.Fragment>
)

export default NewLayout
