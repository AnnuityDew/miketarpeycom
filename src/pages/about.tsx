import React from "react"
import { graphql } from "gatsby"
import NewLayout from "../components/layout"
import { MeCard } from "../components/content-cards"
import { AboutCardGrid } from "../components/content-wrappers"

export default function Home({ data }) {
  return (
    <NewLayout 
    titleTwo = " - about"
    description = "Mike Tarpey's resume and project history."
    url="https://miketarpey.com/about"
    h1text="about"
    >
      <AboutCardGrid>
        <MeCard
          imagesrc={data.headshot.childImageSharp.gatsbyImageData}
          imagealt="Recent headshot of Mike Tarpey."
        />
      </AboutCardGrid>
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
