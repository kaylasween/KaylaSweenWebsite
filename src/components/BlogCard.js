import React from 'react'
import { Link } from "gatsby"

// import styled from '@emotion/styled'

import Card from 'react-bootstrap/Card'

import './blogCard.css'


const BlogCard = ({ post }) => (
  <Card className="blog-card"> 
    <Card.Title>
      <a href={'https://dev.to/kaylasween/' + post.slug}>
        <h3>{post.title}</h3>
      </a>
    </Card.Title>
    <Card.Subtitle>
      Published on {post.readable_publish_date} 
    </Card.Subtitle>
    <Card.Text className="tags">
      {post.tag_list_array.map((tag, key) => (
        <a key={key} href={'https://dev.to/t/' + tag}>
          <span className="tag">{`#${tag}`}</span>
        </a>
      ))}
    </Card.Text>
    
  </Card>
)

export default BlogCard