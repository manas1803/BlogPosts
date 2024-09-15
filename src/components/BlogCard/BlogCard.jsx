import React from "react";
import { Card } from "react-bootstrap";
import BlogCardTitle from "./components/BlogCardTitle/BlogCardTitle";
import BlogCardContent from "./components/BlogCardContent/BlogCardContent";
import BlogCardAuthor from "./components/BlogCardAuthor/BlogCardAuthor";
import BlogCardTimeAgo from "./components/BlogCardTimeAgo/BlogCardTimeAgo";

const BlogCard = ({ title, content, authorId,timeStamp }) => {
  
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <BlogCardTitle title={title} />
        <BlogCardContent content={content} />
        <BlogCardAuthor authorId={authorId} />
        <BlogCardTimeAgo timeStamp={timeStamp} />
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
