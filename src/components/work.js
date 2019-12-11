import React from 'react'
import Img from "gatsby-image"

const Work = props => (
  <div className="work-article">
    <Img fluid={props.data.featured_image.localFile.childImageSharp.fluid} />
    <h2>{props.data.title.text}</h2>
  </div>
)

export default Work
