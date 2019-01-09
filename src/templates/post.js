import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Menu from "../components/workMenu"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <Menu />
    <div className="blog-post-container">
      <div className="blog-post">
        <h3>{frontmatter.title}, {frontmatter.date}</h3>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY")
        path
        title
      }
    }
  }
`
