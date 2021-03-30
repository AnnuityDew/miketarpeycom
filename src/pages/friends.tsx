/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContentWrapper from "../components/content-wrapper"
import { OutboundContentCard } from "../components/content-cards"

export default function Friends({ data }) {
  return (
    <Layout>
      <ContentWrapper
        gridType={["1fr", "1fr", "1fr", "1fr", "1fr"]}
        minSectionHeight={"80vh"}
      >
        <OutboundContentCard
          contentSectionHeight="80vh"
          contentGridTemplateRows="1.2fr 0.6fr 1.2fr"
          contentName="trevor wentt"
          contentInfo="He makes art to challenge perspectives and give hope to the
          marginalized and oppressed."
          contentData={[
            {
              labelData: "visit trevorwentt.com",
              linkData: "https://trevorwentt.com/",
              sizeData: "large",
            },
          ]}
          imageData={data.trevor.childImageSharp.gatsbyImageData}
        />
        <OutboundContentCard
          contentSectionHeight="80vh"
          contentGridTemplateRows="1.2fr 0.6fr 1.2fr"
          contentName="constant content"
          contentInfo="Bad memes and nonstop emotes."
          contentData={[
            {
              labelData: "annuitydew",
              linkData: "https://twitch.tv/annuitydew",
              sizeData: "medium",
            },
            {
              labelData: "branjd93",
              linkData: "https://twitch.tv/branjd93",
              sizeData: "medium",
            },
            {
              labelData: "peakaardvark",
              linkData: "https://twitch.tv/peakaardvark",
              sizeData: "medium",
            },
            {
              labelData: "redlac297",
              linkData: "https://twitch.tv/redlac297",
              sizeData: "medium",
            },
            {
              labelData: "sendsick",
              linkData: "https://twitch.tv/sendsick",
              sizeData: "medium",
            },
          ]}
          imageData={data.cc.childImageSharp.gatsbyImageData}
        />
      </ContentWrapper>
    </Layout>
  );
}

export const query = graphql`query getFriendPictures {
  trevor: file(relativePath: {eq: "trevor-wentt-freshness.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  cc: file(relativePath: {eq: "cc-crown-grab.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`
