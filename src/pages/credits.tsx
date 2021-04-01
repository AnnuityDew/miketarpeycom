import React from "react"
import { graphql } from "gatsby"
import NewLayout from "../components/layout"

export default function Page() {
  return (
    <NewLayout h1text="credits">
      <h2>Under construction!</h2>
    </NewLayout>
  )
}

export const pageQuery = graphql`
  query getCreditsPictures {
    headshot: file(relativePath: { eq: "raw/mike-tarpey-headshot-20200427.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`