import React from "react"
import { graphql } from "gatsby"
import NewLayout from "../components/layout"

export default function Page() {
  return (
    <NewLayout
      titleTwo=" - 404 error"
      description="404 error page for Mike Tarpey's website."
      h1text="404 error!"
    >
      <h2>There's nothing here.</h2>
    </NewLayout>
  )
}

export const pageQuery = graphql`
  query get404Pictures {
    headshot: file(
      relativePath: { eq: "raw/mike-tarpey-headshot-20200427.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
