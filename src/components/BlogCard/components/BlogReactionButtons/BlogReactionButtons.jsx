import React from "react";
import { useDispatch } from "react-redux";
import { reactionsEmoji } from "../../../../common/reactions";
import { Button } from "react-bootstrap";
import { addReactions } from "../../../../features/blogs/blogsSlice";

const BlogReactionButtons = ({ blog }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionsEmoji).map(
    ([name, emoji]) => {
      return (
        <Button
          type="button"
          key={name}
          onClick={() =>
            dispatch(addReactions({ blogId: blog.id, reaction: name }))
          }
        >
          {emoji} {blog.reactions[name]}
        </Button>
      );
    }
  );
  return <div>{reactionButtons}</div>;
};

export default BlogReactionButtons;
