import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../../components/layout"
import Menu from "../../../components/workMenu"
import Img from "gatsby-image"


export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
    <Menu />
    <div className="posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="post-preview" key={post.id}>
              <h3>
                <Link style={{ color: "black"}} to={post.frontmatter.path}><i>{post.frontmatter.title}</i>, {post.frontmatter.date} <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} /></Link>
              </h3>
            </div>
          )
        })}
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query VideoQuery {
  allMarkdownRemark(filter: { frontmatter: { path: {regex: "/work/video/" } } },
  sort: { fields: [frontmatter___date], order: DESC },
  limit: 1000) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "YYYY")
          path
          featuredImage {
              childImageSharp{
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}`
