/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContentWrapper from "../components/content-wrapper"
import BackgroundImage from "gatsby-background-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"


export default function Credits({ data }) {
  return (
    <Layout>
      <ContentWrapper gridType={["1fr", "1fr", "1fr", "1fr", "1fr"]} minItemHeight={"100vh"}>
        <BackgroundImage
            Tag="section"
            fluid={data.actuary.childImageSharp.fluid}
          >
          <h2>page under construction!</h2>
        </BackgroundImage>
      </ContentWrapper>
    </Layout>
  )
}

export const query = graphql`
  query getCreditsPictures {
    actuary: file(relativePath: { eq: "mike-tarpey-richmond-actuary.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
