/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import ContentWrapper from "../components/content-wrapper"
import { OutboundContentCard } from "../components/content-cards"

export default function Timeline({ data }) {
  return (
    <Layout>
      <ContentWrapper
        gridType={["1fr", "1fr", "1fr", "1fr", "1fr"]}
        minSectionHeight={"100vh"}
      >
        <OutboundContentCard
          contentSectionHeight="100vh"
          contentGridTemplateRows="1.2fr 0.6fr 1.2fr"
          contentName="page under construction!"
          contentInfo="For now, check out the mini web apps I've created on my other site."
          contentData={[
            {
              labelData: "visit tarpey.dev",
              linkData: "https://tarpey.dev/",
              sizeData: "large",
            },
          ]}
          imageData="/pics/mike-tarpey-richmond-actuary.jpg"
        />
      </ContentWrapper>
    </Layout>
  );
}
