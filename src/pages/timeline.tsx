import React from "react"
import { graphql } from "gatsby"
import NewLayout from "../components/layout"

export default function Page() {
  return (
    <NewLayout 
    titleTwo = " - timeline"
    description = "A selection of the memories that Mike Tarpey carries around."
    url="https://miketarpey.com/timeline"
    h1text="timeline"
    >
      <h2>Under construction!</h2>
    </NewLayout>
  )
}

export const pageQuery = graphql`
  query getTimelinePictures {
    headshot: file(
      relativePath: { eq: "raw/mike-tarpey-headshot-20200427.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
