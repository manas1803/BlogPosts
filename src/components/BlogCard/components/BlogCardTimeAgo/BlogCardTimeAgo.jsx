import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";
import { Card } from "react-bootstrap";

const BlogCardTimeAgo = ({ date }) => {
  let timeAgo = "";
  if (date) {
    const parsedDate = parseISO(date);
    const timePeriod = formatDistanceToNow(parsedDate);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <Card.Text title={date}>
      &nbsp;<i>{timeAgo}</i>
    </Card.Text>
  );
};

export default BlogCardTimeAgo;
