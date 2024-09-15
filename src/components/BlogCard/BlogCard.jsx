import React from "react";
import { Card } from "react-bootstrap";
import BlogCardTitle from "./components/BlogCardTitle/BlogCardTitle";
import BlogCardContent from "./components/BlogCardContent/BlogCardContent";
import BlogCardAuthor from "./components/BlogCardAuthor/BlogCardAuthor";

const BlogCard = ({ title, content, authorId }) => {
  
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <BlogCardTitle title={title} />
        <BlogCardContent content={content} />
        <BlogCardAuthor authorId={authorId} />
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
