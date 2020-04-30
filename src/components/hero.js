import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import LogoShopify from "../assets/logo-shopify.svg"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <div className="hero">
      <div className="hero__content">
        <p>I’m <strong>Dries Pieters</strong>, a Brussels based front-end developer. Over the 9 years of my career I've specialized myself in Shopify, helping start-ups and establised brands with their e-commerce strategy.</p>
        <p>If you think I'd be a good fit for your project, please get in touch and we can chat.</p>
        <a href="https://www.shopify.be/?ref=driespieters" target="_blank" title="Shopify Plus Expert" className="hero__shopify" rel="noopener noreferrer">
          <LogoShopify />
        </a>
      </div>
      <Img fluid={data.file.childImageSharp.fluid} className="hero__image"/>
    </div>
  )
}
export default Hero
