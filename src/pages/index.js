import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const IndexPage  = (props) => (
  <Layout>
  <Slider infinite={true} slidesToShow={1} autoplay={true} autoplaySpeed={8000} fade={true} >
    <div>
      <Img fluid={props.data.waiting.childImageSharp.fluid} />
      <br/>
      <b><i>Waiting</i></b>, 1988
    </div>
    <div>
      <Img fluid={props.data.remains.childImageSharp.fluid} />
      <br/>
      <b><i>Remains (Kneecapping Behind Creggan Shops)</i></b>, 2013
    </div>
    <div>
      <Img fluid={props.data.silence.childImageSharp.fluid} />
      <br/>
      <b><i>Silence After a Kneecapping</i></b>, 1985
    </div>
    <div>
      <Img fluid={props.data.distance.childImageSharp.fluid} />
      <br/>
      <b><i>Critical Distance</i></b>, 1997
    </div>
    <div>
      <Img fluid={props.data.fence.childImageSharp.fluid} />
      <br/>
      <b><i>Wire Fence and Blue Sky</i></b>, 2004
    </div>
    <div>
      <Img fluid={props.data.border.childImageSharp.fluid} />
      <br/>
      <b><i>Border Road</i></b>, 1994
    </div>
  </Slider>
  </Layout>
)
export default IndexPage


export const pageQuery = graphql`
  query {
    waiting: file(relativePath: { eq: "1988-Waiting-CMYK.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    remains: file(relativePath: { eq: "remains_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    silence: file(relativePath: { eq: "SilenceAfterAKneecaping1985.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    border: file(relativePath: { eq: "Border-Road.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fence: file(relativePath: { eq: "wire-fence.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    distance: file(relativePath: { eq: "CriticalDistance.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
