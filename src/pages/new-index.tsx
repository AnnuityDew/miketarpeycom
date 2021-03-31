import React from "react"
import { graphql } from "gatsby"
import NewLayout from "../components/new-layout"
import useNavMetadata from "../hooks/use-nav-metadata"
import { NavCard } from "../components/content-cards"
import { CardGrid } from "../components/content-wrappers"

export default function Home({ data }) {
  const { navMetadata } = useNavMetadata()
  return (
    <NewLayout>
      <h1>mike tarpey</h1>
      <CardGrid>
        <NavCard
          internal={true}
          label="about"
          sublabel="test content"
          linksrc={navMetadata[1]["slug"]}
          imagesrc={data.about.childImageSharp.gatsbyImageData}
          imagealt="Recent headshot of Mike Tarpey."
        />
        <NavCard
          internal={true}
          label="timeline"
          sublabel="test content"
          linksrc={navMetadata[2]["slug"]}
          imagesrc={data.timeline.childImageSharp.gatsbyImageData}
          imagealt="Childhood picture of Mike Tarpey at Daytona Beach."
        />
        <NavCard
          internal={true}
          label="friends"
          sublabel="test content"
          linksrc={navMetadata[3]["slug"]}
          imagesrc={data.friends.childImageSharp.gatsbyImageData}
          imagealt="Mike Tarpey's last photo with his UConn crew before graduating."
        />
        <NavCard
          internal={false}
          label="apps"
          sublabel="test content"
          linksrc="https://tarpey.dev"
          imagesrc={data.apps.childImageSharp.gatsbyImageData}
          imagealt="Screenshot of some JavaScript code."
        />
        <NavCard
          internal={false}
          label="blog"
          sublabel="test content"
          linksrc="https://miketarpey.medium.com/"
          imagesrc={data.blog.childImageSharp.gatsbyImageData}
          imagealt="A cat standing on Mike Tarpey's laptop keyboard."
        />
        <NavCard
          internal={true}
          label="credits"
          sublabel="test content"
          linksrc={navMetadata[4]["slug"]}
          imagesrc={data.credits.childImageSharp.gatsbyImageData}
          imagealt="The dogs Baxter and Bravo hanging out in the backyard, one stacked on top of the other."
        />
      </CardGrid>
    </NewLayout>
  )
}

export const pageQuery = graphql`
  query getIndexPictures {
    about: file(relativePath: { eq: "raw/mike-tarpey-at-pax.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    timeline: file(relativePath: { eq: "raw/mike-tarpey-childhood-beach.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    friends: file(relativePath: { eq: "raw/dew-uconn-crew.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    apps: file(relativePath: { eq: "raw/code-screencap.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    blog: file(relativePath: { eq: "dimmed/cat-blogger.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    credits: file(relativePath: { eq: "raw/baxter-bravo-stack.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`