import { Row,Container } from "react-bootstrap";
import "./App.css";
import BlogEditor from "./pages/BlogEditor";
import BlogPost from "./pages/BlogPost";

function App() {
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
