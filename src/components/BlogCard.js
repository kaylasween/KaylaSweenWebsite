import React from 'react'
import { Link } from "gatsby"

import "../styles/components/_blog-card.scss"

const BlogCard = ({ post }) => (
  <div className="blog-card">
    <Link to={post.frontmatter.path}>
      <h2>{post.frontmatter.title}</h2>
    </Link>
    <p>{post.excerpt}</p>
    <div class="blog-card__footer">
      Published on {post.frontmatter.date}
    </div>
  </div>
)

export default BlogCard