import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllAuthors } from "../../../../features/users/usersSlice";

const BlogCardAuthor = ({ userId }) => {
  const authors = useSelector((state) => getAllAuthors(state));
  const author = authors.find((author) => author.id === userId);
  return <Card.Text>By {author ? author?.name : "Unknown author"}</Card.Text>;
};

export default BlogCardAuthor;
