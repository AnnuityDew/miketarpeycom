/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContentWrapper from "../components/content-wrapper"
import BackgroundImage from "gatsby-background-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

/* this is a good candidate for turning into a component... */

export default function Friends({ data }) {
  return (
    <Layout>
      <ContentWrapper gridType={["1fr", "1fr", "1fr", "1fr", "1fr"]} minItemHeight={"80vh"}>
        <BackgroundImage
          Tag="section"
          fluid={data.trevor.childImageSharp.fluid}
        >
          <h2>trevor wentt</h2>
          <span>
            He makes art to challenge perspectives and give hope to the
            marginalized and oppressed.
          </span>
          <OutboundLink href="https://trevorwentt.com/">
            <sl-button class="link-button">visit trevorwentt.com</sl-button>
          </OutboundLink>
        </BackgroundImage>
        <BackgroundImage
          Tag="section"
          fluid={data.cc.childImageSharp.fluid}
        >
          <h2>constant content</h2>
          <span>Bad memes and nonstop emotes.</span>
          <div sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", div: { padding: "10px" } }}>
            <div><OutboundLink href="https://twitch.tv/annuitydew">
              <sl-button class="link-button">annuitydew</sl-button>
            </OutboundLink></div>
            <div><OutboundLink href="https://twitch.tv/branjd93">
              <sl-button class="link-button">branjd93</sl-button>
            </OutboundLink></div>
            <div><OutboundLink href="https://twitch.tv/peakaardvark">
              <sl-button class="link-button">peakaardvark</sl-button>
            </OutboundLink></div>
            <div><OutboundLink href="https://twitch.tv/redlac297">
              <sl-button class="link-button">redlac297</sl-button>
            </OutboundLink></div>
            <div><OutboundLink href="https://twitch.tv/sendsick">
              <sl-button class="link-button">sendsick</sl-button>
            </OutboundLink></div>
          </div>
        </BackgroundImage>
      </ContentWrapper>
    </Layout>
  )
}

export const query = graphql`
  query getFriendPictures {
    trevor: file(relativePath: { eq: "trevor-wentt-freshness-45.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cc: file(relativePath: { eq: "cc-crown-grab.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
