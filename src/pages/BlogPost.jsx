import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "../components/BlogCard/BlogCard";
import { getAllBlogs } from "../features/blogs/blogsSlice";

const BlogPost = () => {
  const allBlogs = useSelector((state) => getAllBlogs(state));
  const orderedBlogs = allBlogs.slice().sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <Container>
        {allBlogs &&
          orderedBlogs.map((blog) => {
            return (
              <Row key={blog.id}>
                <Col>
                  <BlogCard
                    title={blog?.title}
                    content={blog?.content}
                    authorId={blog?.author}
                    timeStamp={blog?.date}
                  />
                </Col>
              </Row>
            );
          })}
      </Container>
    </>
  );
};

export default BlogPost;
