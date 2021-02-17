/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContentWrapper from "../components/content-wrapper"
import { CreditCard } from "../components/content-cards"

export default function Credits({ data }) {
  return (
    <Layout>
      <ContentWrapper wrapperGridColumns={["1fr", "1fr", "1fr", "1fr", "1fr"]}>
        <CreditCard
          contentName="LekoArts"
          contentInfo="The theme that originally inspired the site redesign / rewrite!"
          contentData={[
            {
              labelData: "visit jodie.lekoarts.de",
              linkData: "https://jodie.lekoarts.de/",
              sizeData: "large",
            },
          ]}
          fontColor="rgba(0, 0, 0, 1)"
          bgColor="rgba(255, 255, 255, 1)"
          borderColor="rgba(0, 0, 0, 1)"
          buttonClass="dark-button"
        />
        <CreditCard
          contentName="Gatsby"
          contentInfo="React's excellent recommendation for static sites."
          contentData={[
            {
              labelData: "visit gatsbyjs.com",
              linkData: "https://www.gatsbyjs.com/",
              sizeData: "large",
            },
          ]}
          fontColor="rgba(255, 255, 255, 1)"
          bgColor="rgba(95, 56, 148, 1)"
          borderColor="rgba(255, 255, 255, 1)"
          buttonClass="light-button"
        />
        <CreditCard
          contentName="Shoelace"
          contentInfo="Nice looking buttons! (And a whole lot more.)"
          contentData={[
            {
              labelData: "visit shoelace.style",
              linkData: "https://shoelace.style/",
              sizeData: "large",
            },
          ]}
          fontColor="rgba(255, 255, 255, 1)"
          bgColor="rgba(88, 158, 248, 1)"
          borderColor="rgba(255, 255, 255, 1)"
          buttonClass="light-button"
        />
        <CreditCard
          contentName="CSS-Tricks"
          contentInfo="This site would not exist without their great guides."
          contentData={[
            {
              labelData: "visit css-tricks.com",
              linkData: "https://css-tricks.com/",
              sizeData: "large",
            },
          ]}
          fontColor="rgba(255, 255, 255, 1)"
          bgColor="linear-gradient(
            130deg
            ,#ff7a18,#af002d 41.07%,#319197 76.05%)"
          borderColor="rgba(255, 255, 255, 1)"
          buttonClass="light-button"
        />
        <CreditCard
          contentName="Firebase"
          contentInfo="Pretty painless hosting for static sites."
          contentData={[
            {
              labelData: "visit firebase.google.com",
              linkData: "https://firebase.google.com/",
              sizeData: "large",
            },
          ]}
          fontColor="rgba(0, 0, 0, 1)"
          bgColor="rgba(247, 204, 81, 1)"
          borderColor="rgba(0, 0, 0, 1)"
          buttonClass="dark-button"
        />
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
