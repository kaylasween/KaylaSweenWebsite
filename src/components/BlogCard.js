import React from 'react'
import { Link } from "gatsby"

import ReactHtmlParser from 'react-html-parser';

// import styled from '@emotion/styled'

import "../styles/components/_blog-card.scss"

// export const BlogContent = ({ body }) => (
//   <p>
//     {body}
//   </p>
// )

const BlogCard = ({ post }) => (
  <div className="blog-card">
    <Link to={post.frontmatter.path}>
      <h2>{post.frontmatter.title}</h2>
    </Link>
    {/* <BlogContent body={post.exerpt} /> */}
    <p>{post.experpt}</p>
    <div class="blog-card__footer">
      Published on {post.frontmatter.date}
    </div>
  </div>
)

export default BlogCard