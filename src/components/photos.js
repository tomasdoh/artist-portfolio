import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const Photos = () => (
  <StaticQuery
    query={graphql`
      query {
        photos: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox photos={data.photos.edges} />}
  />
)
export default Photos
