/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import ContentWrapper from "../components/content-wrapper"
import useNavMetadata from "../hooks/use-nav-metadata"
import {
  FrontpageInternalCard,
  FrontpageOutboundCard,
} from "../components/content-cards"

export default function Home({ data }) {
  const { navMetadata } = useNavMetadata()
  return (
    <Layout>
      <ContentWrapper gridType={["1fr", "1fr", "1fr", "1fr", "1fr"]}>
        <FrontpageInternalCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="about"
          linkData={navMetadata[1]["slug"]}
          imageData="/pics/mike-tarpey-at-pax.jpg"
        />
        <FrontpageInternalCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="timeline"
          linkData={navMetadata[2]["slug"]}
          imageData="/pics/mike-tarpey-childhood-beach.jpg"
        />
        <FrontpageInternalCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="friends"
          linkData={navMetadata[3]["slug"]}
          imageData="/pics/dew-uconn-crew.jpg"
        />
        <FrontpageOutboundCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="apps"
          subLabelData="(tarpey.dev)"
          linkData="https://tarpey.dev"
          imageData="/pics/code-screencap-dim.jpg"
        />
        <FrontpageOutboundCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="blog"
          subLabelData="(medium.com)"
          linkData="https://miketarpey.medium.com/"
          imageData="/pics/cat-blogger.jpg"
        />
        <FrontpageInternalCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="credits"
          linkData={navMetadata[4]["slug"]}
          imageData="/pics/baxter-bravo-stack.jpg"
        />
      </ContentWrapper>
    </Layout>
  );
}
