import React from 'react'
import { Link } from "gatsby"

// import styled from '@emotion/styled'

import './blogCard.css'


const BlogCard = ({ post }) => (
  <div className="blog-card">
      <a href={'https://dev.to/kaylasween/' + post.slug}>
        <h3>{post.title}</h3>
      </a>
      <div class="flex">
        Published on {post.readable_publish_date} 
        {post.tag_list_array.map((tag, key) => (
          <a key={key} href={'https://dev.to/t/' + tag}>
            <span className="tag">{`#${tag}`}</span>
          </a>
        ))}
      </div>
  </div>
)

export default BlogCard