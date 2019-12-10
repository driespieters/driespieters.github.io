import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Work from "../components/work"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Work />

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default IndexPage
