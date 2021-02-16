/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ContentWrapper from "../components/content-wrapper"
import BackgroundImage from "gatsby-background-image"
import useNavMetadata from "../hooks/use-nav-metadata"
import { OutboundLink } from "gatsby-plugin-google-gtag"


export default function Home({ data }) {
  const { navMetadata } = useNavMetadata()
  return (
    <Layout>
      <ContentWrapper gridType={["1fr", "1fr", "1fr", "1fr", "1fr"]} minItemHeight={"30vh"}>
        <Link to={navMetadata[1]["slug"]}>
          <BackgroundImage
            Tag="section"
            fluid={data.about.childImageSharp.fluid}
          >
            <h1 className="home-click">about</h1>
          </BackgroundImage>
        </Link>
        <Link to={navMetadata[2]["slug"]}>
          <BackgroundImage
            Tag="section"
            fluid={data.timeline.childImageSharp.fluid}
          >
            <h1 className="home-click">timeline</h1>
          </BackgroundImage>
        </Link>
        <Link to={navMetadata[3]["slug"]}>
          <BackgroundImage
            Tag="section"
            fluid={data.friends.childImageSharp.fluid}
          >
            <h1 className="home-click">friends</h1>
          </BackgroundImage>
        </Link>
        <OutboundLink href="https://tarpey.dev">
          <BackgroundImage
            Tag="section"
            fluid={data.apps.childImageSharp.fluid}
          >
            <h1 className="home-click">apps</h1>
            <h3 className="home-click">(tarpey.dev)</h3>
          </BackgroundImage>
        </OutboundLink>
        <OutboundLink href="https://miketarpey.medium.com">
          <BackgroundImage
            Tag="section"
            fluid={data.blog.childImageSharp.fluid}
          >
            <h1 className="home-click">blog</h1>
            <h3 className="home-click">(medium.com)</h3>
          </BackgroundImage>
        </OutboundLink>
        <Link to={navMetadata[4]["slug"]}>
          <BackgroundImage
            Tag="section"
            fluid={data.credits.childImageSharp.fluid}
          >
            <h1 className="home-click">credits</h1>
          </BackgroundImage>
        </Link>
      </ContentWrapper>
    </Layout>
  )
}

export const query = graphql`
  query getIndexPictures {
    about: file(relativePath: { eq: "mike-tarpey-at-pax.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    timeline: file(relativePath: { eq: "mike-tarpey-childhood-beach.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    friends: file(relativePath: { eq: "dew-uconn-crew.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    apps: file(relativePath: { eq: "code-screencap-dim.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    blog: file(relativePath: { eq: "cat-blogger.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    credits: file(relativePath: { eq: "baxter-bravo-stack.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`