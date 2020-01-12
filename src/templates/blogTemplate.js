import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'

export default function Template({
  data: { mdx },
}) {
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{mdx.frontmatter.title}</h1>
          <small>{mdx.frontmatter.date}</small>
          <MDXRenderer>{mdx.rawBody}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      rawBody
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`