import React from "react"
import { graphql } from "gatsby"
import NewLayout from "../components/layout"
import { NavCard } from "../components/content-cards"
import { CardGrid } from "../components/content-wrappers"
import { OutboundButton } from "../components/buttons"

export default function Home({ data }) {
  return (
    <NewLayout h1text="friends">
      <CardGrid>
        <NavCard
          internal={false}
          label="trevor wentt"
          imagesrc={data.trevor.childImageSharp.gatsbyImageData}
          imagealt="Trevor Wentt standing at the corner of a downtown intersection."
          gridrowcss="5fr 1fr 2fr 1fr"
        >
          <h5>
            He makes art to challenge perspectives and give hope to the marginalized and oppressed.
          </h5>
          <OutboundButton label="visit trevorwentt.com" url="https://trevorwentt.com/" kind="light" width="100%" />
        </NavCard>
        <NavCard
          internal={false}
          label="constant content"
          imagesrc={data.cc.childImageSharp.gatsbyImageData}
          imagealt="A Fall Guys character grabbing the Fall Mountain crown for the win!"
          gridrowcss="5fr 1fr 2fr 1fr"
        >
          <h5>
            Bad memes and nonstop emotes...we have fun here.
          </h5>
          <OutboundButton label="join the discord" url="https://discord.com/invite/bVDZfNe" kind="light" width="100%" />
        </NavCard>
      </CardGrid>
    </NewLayout>
  )
}

export const pageQuery = graphql`
  query getFriendPictures {
    trevor: file(relativePath: { eq: "raw/trevor-wentt-freshness-45.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    cc: file(relativePath: { eq: "raw/cc-crown-grab.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
  }
`