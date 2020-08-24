import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./work.module.css"

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "gimber.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
  <section className={styles.work}>
    <div className={styles.title}>
      <h2>Selected work</h2>
    </div>
    <div>
      <div className={styles.item}>
        <Img fluid={data.file.childImageSharp.fluid}/>
        <h3>Gimber</h3>
        <p>GIMBER is the organic alternative to any alcoholic drink. We packed this concentrate with a.o. the best organic Peruvian ginger, lemons, herbs, spices and gems in order to present your taste buds with a tango.</p>
      </div>
    </div>
  </section>
)
}
export default Work
