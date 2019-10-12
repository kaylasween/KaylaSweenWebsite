import React from 'react'
import { Link } from "gatsby"

import ReactHtmlParser from 'react-html-parser';

// import styled from '@emotion/styled'

import("../styles/components/_blog-card.scss")

export const BlogContent = ({ body }) => (
  <p>
    {ReactHtmlParser(body)}
  </p>
)

const BlogCard = ({ post }) => (
  <div className="blog-card">
      <a href={'https://dev.to/kaylasween/' + post.slug}>
        <h2>{post.title}</h2>
      </a>
      <BlogContent body={post.body_html} />
      <div class="blog-card__footer">
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