import React from "react"
import Layout from "../components/layout"

export default function Error404() {
  return (
    <Layout>
      <section
        sx={{
          padding: ["32px"],
        }}
      >
        <p>404! This page doesn't exist.</p>
      </section>
    </Layout>
  )
}
