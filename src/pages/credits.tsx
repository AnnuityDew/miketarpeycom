/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import ContentWrapper from "../components/content-wrapper"
import { CreditCard } from "../components/content-cards"

export default function Credits() {
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
          buttonType="dark"
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
          buttonType="light"
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
          buttonType="light"
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
          buttonType="dark"
        />
      </ContentWrapper>
    </Layout>
  )
}
