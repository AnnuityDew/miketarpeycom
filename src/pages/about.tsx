/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import ContentWrapper from "../components/content-wrapper"
import BackgroundImage from "gatsby-background-image"

/* this is a good candidate for turning into a component... */

export default function About({ data }) {
  return (
    <Layout>
      <ContentWrapper gridType={["1fr", "1fr", "1fr", "1fr", "1fr"]} minItemHeight={"100vh"}>
        <BackgroundImage
            Tag="section"
            fluid={data.actuary.childImageSharp.fluid}
          >
          <h2>page under construction!</h2>
          <span>
            For now, check out LinkedIn if you're looking for my up-to-date resume.
          </span>
          <OutboundLink href="https://www.linkedin.com/in/mptarpey/">
            <sl-button class="link-button">visit linkedin.com</sl-button>
          </OutboundLink>
        </BackgroundImage>
      </ContentWrapper>
    </Layout>
  )
}

export const query = graphql`
  query getAboutPictures {
    actuary: file(relativePath: { eq: "mike-tarpey-richmond-actuary.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
