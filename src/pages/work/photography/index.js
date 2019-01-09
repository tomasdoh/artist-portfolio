import React from "react"
import Layout from "../../../components/layout"
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import Menu from "../../../components/workMenu"

const Work = (props) => (
  <Layout>
  <Menu />
  <Img fluid={props.data.remains.childImageSharp.fluid} />
  </Layout>
)
export default Work

export const pageQuery = graphql`
  query {
    remains: file(relativePath: { eq: "remains_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
