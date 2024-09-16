import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "../components/BlogCard/BlogCard";
import {
  fetchBlogs,
  getAllBlogs,
  getBlogStatus,
} from "../features/blogs/blogsSlice";

const BlogPost = () => {
  const dispatch = useDispatch();
  const blogsStatus = useSelector((state) => getBlogStatus(state));
  useEffect(() => {
    if (blogsStatus === "idle") {
      dispatch(fetchBlogs());
    }
  }, [fetchBlogs, blogsStatus, dispatch]);

  const allBlogs = useSelector((state) => getAllBlogs(state));
  const orderedBlogs = allBlogs
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <Container>
        {allBlogs &&
          orderedBlogs.map((blog) => {
            return (
              <Row key={blog.id}>
                <Col>
                  <BlogCard blog={blog} />
                </Col>
              </Row>
            );
          })}
      </Container>
    </>
  );
};

export default BlogPost;
