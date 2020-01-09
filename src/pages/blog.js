import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


import BlogCard from '../components/BlogCard'

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

const BlogPage = ({
  data,
}) => (
    <Layout>
      <h1>Blog</h1>
      <p>{data.allMarkdownRemark.edges.length} {data.allMarkdownRemark.edges.length !== 1 ? 'posts' : 'post'}</p>
      {data.allMarkdownRemark.edges.map(edge => (
        <BlogCard
          key={edge.node.id}
          post={{
            ...edge.node,
          }}
        />
      ))}
    </Layout>
  )

export default BlogPage