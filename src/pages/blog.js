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
  // data: {
  //   allMarkdownRemark: { edges }
  // },
}) => (
    <Layout>
      <h1>Blog</h1>
      <p><em>I'm working on getting all of my posts onto my website!</em> In the meantime, you can check out my writing on <a href="https://dev.to/kaylasween">The Dev Community</a>!</p>
      {/* <p>{data.allMarkdownRemark.totalCount} posts</p>
      {data.allMarkdownRemark.edges.map(edge => (
        <BlogCard
          key={edge.node.id}
          post={{
            ...edge.node,
          }}
        />
      ))} */}
    </Layout>
  )

export default BlogPage



// export const query = graphql`
//   query BlogPageQuery {
//     allDevArticles (
//       sort: {
//         fields: [article___published_at],
//         order: DESC
//       }
//     ) {
//       edges {
//         node {
//           article {
//             body_html
//             id
//             title
//             slug
//             tag_list
//             readable_publish_date
//           }
//         }
//       }
//       totalCount
//     }
//   }
// `