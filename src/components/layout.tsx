import React from "react"
import SEO from "./seo"
import NewHeader from "./header"

interface LayoutProps {
  titleTwo?: string
  description?: string
  url?: string
  urlImage?: string
  h1text: string
  children: React.ReactNode
}

const NewLayout = ({
  titleTwo = "",
  description,
  url,
  urlImage,
  h1text,
  children,
}: LayoutProps) => (
  <React.Fragment>
    <SEO
      titleTwo={titleTwo}
      description={description}
      url={url}
      urlImage={urlImage}
    />
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
