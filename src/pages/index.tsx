import React from "react"
import { graphql } from "gatsby"
import NewLayout from "../components/layout"
import useNavMetadata from "../hooks/use-nav-metadata"
import { NavCard } from "../components/content-cards"
import { CardGrid } from "../components/content-wrappers"
import { InternalButton, OutboundButton } from "../components/buttons"

export default function Home({ data }) {
  const { navMetadata } = useNavMetadata()
  return (
    <NewLayout h1text="mike tarpey">
      <CardGrid>
        <NavCard
          internal={true}
          label="about"
          imagesrc={data.about.childImageSharp.gatsbyImageData}
          imagealt="Mike Tarpey on his way to PAX East 2020 in Boston, Massachusetts."
        >
          <ul>
            <li>-aspiring software engineer</li>
            <li>-credentialed actuary</li>
            <li>-casual Twitch streamer</li>
            <li>-UConn alum.</li>
          </ul>
          <InternalButton label="full resume + projects" url={navMetadata[1]["slug"]} kind="light" width="100%" />
        </NavCard>
        <NavCard
          internal={true}
          label="timeline"
          imagesrc={data.timeline.childImageSharp.gatsbyImageData}
          imagealt="Childhood picture of Mike Tarpey at Daytona Beach."
        >
          <p>
            A selection of the memories I carry around.
          </p>
          <InternalButton label="coming soon!" url={navMetadata[2]["slug"]} kind="light" width="100%" />
        </NavCard>
        <NavCard
          internal={true}
          label="friends"
          imagesrc={data.friends.childImageSharp.gatsbyImageData}
          imagealt="Mike Tarpey's last photo with his UConn crew before graduating."
        >
          <p>
            Portal to the amazing things that my friends are creating.
          </p>
          <InternalButton label="learn more" url={navMetadata[3]["slug"]} kind="light" width="100%" />
        </NavCard>
        <NavCard
          internal={false}
          label="apps"
          imagesrc={data.apps.childImageSharp.gatsbyImageData}
          imagealt="Screenshot of some JavaScript code."
        >
          <p>
            My app sandbox. Game backlog, March Madness, stats for Mildred League, and more...
          </p>
          <OutboundButton label="visit tarpey.dev" url="https://tarpey.dev" kind="light" width="100%" />
        </NavCard>
        <NavCard
          internal={false}
          label="blog"
          imagesrc={data.blog.childImageSharp.gatsbyImageData}
          imagealt="A cat standing on Mike Tarpey's laptop keyboard."
        >
          <p>
            Ideas and solutions from my day-to-day.
          </p>
          <OutboundButton label="visit medium.com" url="https://miketarpey.medium.com/" kind="light" width="100%" />
        </NavCard>
        <NavCard
          internal={true}
          label="credits"
          imagesrc={data.credits.childImageSharp.gatsbyImageData}
          imagealt="The dogs Baxter and Bravo hanging out in the backyard, one stacked on top of the other."
        >
        <p>
          The technologies that currently make this site possible.
        </p>
        <InternalButton label="view credits" url={navMetadata[4]["slug"]} kind="light" width="100%" />
        </NavCard>
      </CardGrid>
    </NewLayout>
  )
}

export const pageQuery = graphql`
  query getIndexPictures {
    about: file(relativePath: { eq: "raw/mike-tarpey-at-pax.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    timeline: file(relativePath: { eq: "raw/mike-tarpey-childhood-beach.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    friends: file(relativePath: { eq: "raw/dew-uconn-crew.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    apps: file(relativePath: { eq: "raw/code-screencap.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    blog: file(relativePath: { eq: "raw/cat-blogger-hype.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    credits: file(relativePath: { eq: "raw/baxter-bravo-stack.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
  }
`