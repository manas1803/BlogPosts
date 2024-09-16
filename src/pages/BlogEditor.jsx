import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewBlog } from "../features/blogs/blogsSlice";
import { getAllAuthors } from "../features/users/usersSlice";
import { nanoid } from "@reduxjs/toolkit";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [formStatus,setFormStatus] = useState("idle")

  const authors = useSelector((state) => getAllAuthors(state));
  const dispatch = useDispatch();

  const isFormValid = !!title && !!content && !!authorId && formStatus==="idle" 

  const handleSubmit = () => {
    if(formStatus==="idle"){
      try{
        setFormStatus("pending")
        dispatch(addNewBlog({title, body:content, userId:authorId})).unwrap();
        setTitle("");
        setContent("");
      }
      catch(error){
        return error.message
      }
      finally{
        setFormStatus("idle")
      }
    }
  };

  const authorsOption = authors.map((author) => {
    return (
      <option key={nanoid()} value={author.id}>
        {author.name}
      </option>
    );
  }); 

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Add Content here..."
          style={{ height: "20rem" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAuthors">
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setAuthorId(e.target.value)}
        >
          <option>Open this select menu</option>
          {authorsOption}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit} disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
};

export default BlogEditor;
