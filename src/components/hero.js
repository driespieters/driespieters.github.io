import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div class="hero">
      <div class="hero__text">
        <p>I’m <strong>Dries Pieters</strong>, a Brussels based digital designer currently looking for opportunities in Canada. Over the 8 years of my career, my portfolio includes user interface design, brand & identity design, illustration, and art & creative direction.  </p>
        <p>If you think I'd be a good fit for your team, please get in touch and we can chat.</p>
      </div>
      <Img fluid={data.file.childImageSharp.fluid} className="hero__image" />
    </div>
  )
}
export default Hero
