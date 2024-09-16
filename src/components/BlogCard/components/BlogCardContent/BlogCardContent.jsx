import React from "react";
import { Card } from "react-bootstrap";

const BlogCardContent = ({ body }) => {
  return <Card.Text>{body}</Card.Text>;
};

export default BlogCardContent;
