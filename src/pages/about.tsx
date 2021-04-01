import React from "react"
import { graphql } from "gatsby"
import NewLayout from "../components/layout"
import { MeCard } from "../components/content-cards"
import { CardGrid } from "../components/content-wrappers"

export default function Home({ data }) {
  return (
    <NewLayout h1text="about">
      <CardGrid>
        <MeCard
          imagesrc={data.headshot.childImageSharp.gatsbyImageData}
          imagealt="Recent headshot of Mike Tarpey."
        />
      </CardGrid>
    </NewLayout>
  )
}

export const pageQuery = graphql`
  query getAboutPictures {
    headshot: file(
      relativePath: { eq: "raw/mike-tarpey-headshot-20200427.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
  }
`
