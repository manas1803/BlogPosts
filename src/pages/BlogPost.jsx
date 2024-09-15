import React from "react";
import { getAllPosts } from "../features/posts/PostSlice";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "../components/BlogCard/BlogCard";

const BlogPost = () => {
  const allPosts = useSelector((state) => getAllPosts(state));
  console.log(allPosts);
  return (
    <>
      <Container>
          {allPosts?.posts &&
            allPosts?.posts.map((post) => {
              return (
                <Row>
                <Col>
                  <BlogCard title={post?.title} content={post?.content} />
                </Col>
                </Row>
              );
            })}
      </Container>
    </>
  );
};

export default BlogPost;
