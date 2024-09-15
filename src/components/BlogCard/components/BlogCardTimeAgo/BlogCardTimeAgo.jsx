import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";
import { Card } from "react-bootstrap";

const BlogCardTimeAgo = ({ timeStamp }) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <Card.Text title={timeStamp}>
      &nbsp;<i>{timeAgo}</i>
    </Card.Text>
  );
};

export default BlogCardTimeAgo;
