import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

const Work = props => (
  <Link to={`/work/${props.slug}`} className="work-article">
    <Img fluid={props.data.featured_image.localFile.childImageSharp.fluid} className="hero__image" />
    <h2>{props.data.title.text}</h2>
  </Link>
)

export default Work
