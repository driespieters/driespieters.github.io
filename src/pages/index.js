import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Work from "../components/work"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Freelance webdesigner" />
    <Hero />
    <Work />
  </Layout>
)

export default IndexPage
