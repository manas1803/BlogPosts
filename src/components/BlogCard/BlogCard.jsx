import React from "react";
import { Card } from "react-bootstrap";
import BlogCardTitle from "./components/BlogCardTitle/BlogCardTitle";
import BlogCardContent from "./components/BlogCardContent/BlogCardContent";
import BlogCardAuthor from "./components/BlogCardAuthor/BlogCardAuthor";
import BlogCardTimeAgo from "./components/BlogCardTimeAgo/BlogCardTimeAgo";
import BlogReactionButtons from "./components/BlogReactionButtons/BlogReactionButtons";

const BlogCard = ({blog}) => {
  const { title, body, authorId,date } = blog
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <BlogCardTitle title={title} />
        <BlogCardContent body={body} />
        <BlogCardAuthor authorId={authorId} />
        <BlogCardTimeAgo date={date} />
        <BlogReactionButtons blog={blog}/>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
