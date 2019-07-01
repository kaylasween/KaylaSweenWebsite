import React from 'react'
import { Link } from "gatsby"

// import styled from '@emotion/styled'

import Card from 'react-bootstrap/Card'

const BlogCard = ({ post }) => (
  <Card padding={30}>
      <a href={'https://dev.to/kaylasween/' + post.slug}>
        <div className="content">
          <h3>{post.title}</h3>
        </div>
      </a>
      <h4>
        <Link to="/">{post.readable_publish_date}</Link>
      </h4>
      <div className="tags">
        {post.tag_list_array.map((tag, key) => (
          <a key={key} href="/">
            <span className="tag">{`#${tag}`}</span>
          </a>
        ))}
      </div>
  </Card>
)

export default BlogCard