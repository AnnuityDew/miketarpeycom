/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContentWrapper from "../components/content-wrapper"
import BackgroundImage from "gatsby-background-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"


export default function Timeline({ data }) {
  return (
    <Layout>
      <ContentWrapper gridType={["1fr", "1fr", "1fr", "1fr", "1fr"]} minItemHeight={"100vh"}>
        <BackgroundImage
            Tag="section"
            fluid={data.actuary.childImageSharp.fluid}
          >
          <h2>page under construction!</h2>
          <span>
            For now, check out the mini web apps I've created on my other site.
          </span>
          <OutboundLink href="https://tarpey.dev/">
            <sl-button class="link-button">visit tarpey.dev</sl-button>
          </OutboundLink>
        </BackgroundImage>
      </ContentWrapper>
    </Layout>
  )
}

export const query = graphql`
  query getTimelinePictures {
    actuary: file(relativePath: { eq: "mike-tarpey-richmond-actuary.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
