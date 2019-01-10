import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const IndexPage  = (props) => (
  <Layout>
  <Slider infinite={true} slidesToShow={1} width={60} autoplay={true} autoplaySpeed={6000} fade={true} pauseOnHover={false} >
    <div>
      <Img fluid={props.data.waiting.childImageSharp.fluid} />
      <br/>
      <i>Waiting</i>, 1988
    </div>
    <div>
      <Img fluid={props.data.remains.childImageSharp.fluid} />
      <br/>
      <i>Remains (Kneecapping Behind Creggan Shops)</i>, 2013
    </div>
    <div>
      <Img fluid={props.data.silence.childImageSharp.fluid} />
      <br/>
      <i>Silence After a Kneecapping</i>, 1985
    </div>
    <div>
      <Img fluid={props.data.distance.childImageSharp.fluid} />
      <br/>
      <i>Critical Distance</i>, 1997
    </div>
    <div>
      <Img fluid={props.data.fence.childImageSharp.fluid} />
      <br/>
      <i>Wire Fence and Blue Sky</i>, 2004
    </div>
    <div>
      <Img fluid={props.data.border.childImageSharp.fluid} />
      <br/>
      <i>Border Road</i>, 1994
    </div>
  </Slider>
  </Layout>
)
export default IndexPage


export const pageQuery = graphql`
  query {
    waiting: file(relativePath: { eq: "1988-Waiting-CMYK.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 630) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    remains: file(relativePath: { eq: "remains_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 630) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    silence: file(relativePath: { eq: "SilenceAfterAKneecaping1985.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 630) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    border: file(relativePath: { eq: "Border-Road.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 630) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fence: file(relativePath: { eq: "wire-fence.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 630) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    distance: file(relativePath: { eq: "CriticalDistance.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 630) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
