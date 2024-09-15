import React from "react";
import { getAllPosts } from "../features/posts/PostSlice";
import { useSelector } from "react-redux";

const BlogPost = () => {
  const allPosts = useSelector((state) => getAllPosts(state));
  console.log(allPosts);
  return (
    <>
      {allPosts?.posts &&
        allPosts?.posts.map((post) => {
          return (
            <>
              <div>{post.title}</div>
              <div>{post.content}</div>
            </>
          );
        })}
    </>
  );
};

export default BlogPost;
