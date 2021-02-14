/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div
        sx={{
          position: "absolute",
          width: "1px",
          height: "1px",
          objectFit: "cover",
          objectPosition: "right center",
          opacity: "0.0",
        }}
      >
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <section
        sx={{
          padding: ["0px 32px"],
          a: {
            color: "#bbfaff",
            "&:hover,&:focus": {
              color: "#FFCCCC",
            },
          },
        }}
      >
        <h1>mike tarpey</h1>
        <h4>
          A pretty ordinary citizen of planet Earth. Credentialed actuary,
          aspiring programmer, casual Twitch streamer, small-time patron, and
          friend.
        </h4>
        This page is under construction! For now, feel free to check out:
        <ul>
          <li>
            My app playground at <a href="https://tarpey.dev">tarpey.dev</a>
          </li>
          <li>
            My recently-launched tech blog at{" "}
            <a href="https://miketarpey.medium.com">Medium</a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "mike-tarpey-childhood-beach.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
