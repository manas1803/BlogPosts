import { Row, Container } from "react-bootstrap";
import "./App.css";
import BlogEditor from "./pages/BlogEditor";
import BlogPost from "./pages/BlogPost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  
  return (
    <Container>
      <Row>
        <BlogEditor />
      </Row>
      <Row>
        <BlogPost />
      </Row>
    </Container>
  );
}

export default App;
