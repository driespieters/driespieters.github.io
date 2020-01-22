import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Work from "../components/work"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div className="work">
    {props.data.articles.edges.map(article => (
      <Work slug={article.node.slugs[0]} data={article.node.data} />
    ))}
    </div>

  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  query Articles {
    articles: allPrismicWork {
      edges {
        node {
          slugs
          data {
            title {
              text
            }
            featured_image {
              localFile {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
