import React from "react";
import { Card } from "react-bootstrap";

const BlogCardContent = ({ content }) => {
  return <Card.Text>{content}</Card.Text>;
};

export default BlogCardContent;
