import React from 'react'
import { Card } from 'react-bootstrap'

const BlogCard = ({title,content}) => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BlogCard