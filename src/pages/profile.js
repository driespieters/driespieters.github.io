import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <h2>Hi from the second page</h2>
    <h3>Hi from the second page</h3>
    <h4>Hi from the second page</h4>
    <h5>Hi from the second page</h5>
    <h6>Hi from the second page</h6>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
