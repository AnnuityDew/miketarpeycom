/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <section
        sx={{
          padding: ["32px"],
          a: {
            color: "#bbfaff",
            "&:hover,&:focus": {
              color: "#FFCCCC",
            },
          },
        }}
      >
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
