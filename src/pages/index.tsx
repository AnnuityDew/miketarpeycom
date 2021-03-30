/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
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
          imageData={data.about.childImageSharp.gatsbyImageData}
        />
        <FrontpageInternalCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="timeline"
          linkData={navMetadata[2]["slug"]}
          imageData={data.timeline.childImageSharp.gatsbyImageData}
        />
        <FrontpageInternalCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="friends"
          linkData={navMetadata[3]["slug"]}
          imageData={data.friends.childImageSharp.gatsbyImageData}
        />
        <FrontpageOutboundCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="apps"
          subLabelData="(tarpey.dev)"
          linkData="https://tarpey.dev"
          imageData={data.apps.childImageSharp.gatsbyImageData}
        />
        <FrontpageOutboundCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="blog"
          subLabelData="(medium.com)"
          linkData="https://miketarpey.medium.com/"
          imageData={data.blog.childImageSharp.gatsbyImageData}
        />
        <FrontpageInternalCard
          contentSectionHeight="30vh"
          contentGridTemplateRows="1fr"
          labelData="credits"
          linkData={navMetadata[4]["slug"]}
          imageData={data.credits.childImageSharp.gatsbyImageData}
        />
      </ContentWrapper>
    </Layout>
  );
}

export const query = graphql`query getIndexPictures {
  about: file(relativePath: {eq: "mike-tarpey-at-pax.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  timeline: file(relativePath: {eq: "mike-tarpey-childhood-beach.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  friends: file(relativePath: {eq: "dew-uconn-crew.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  apps: file(relativePath: {eq: "code-screencap-dim.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  blog: file(relativePath: {eq: "cat-blogger.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  credits: file(relativePath: {eq: "baxter-bravo-stack.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`
