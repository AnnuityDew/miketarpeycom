/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContentWrapper from "../components/content-wrapper"
import { OutboundContentCard } from "../components/content-cards"

export default function About({ data }) {
  return (
    <Layout>
      <ContentWrapper gridType={["1fr", "1fr", "1fr", "1fr", "1fr"]}>
        <OutboundContentCard
          contentSectionHeight="100vh"
          contentGridTemplateRows="1.2fr 0.6fr 1.2fr"
          contentName="page under construction!"
          contentInfo="For now, check out LinkedIn if you're looking for my up-to-date
            resume."
          contentData={[
            {
              labelData: "visit linkedin.com",
              linkData: "https://www.linkedin.com/in/mptarpey/",
              sizeData: "large",
            },
          ]}
          imageData={data.actuary.childImageSharp.fluid}
        />
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
