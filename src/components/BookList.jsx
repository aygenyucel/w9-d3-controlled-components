import { Button, Container, Form, Row } from "react-bootstrap";
import fantasyBooks from "../booksData/fantasy.json";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  let { listOfBooks = fantasyBooks } = props;
  return (
    <Container>
      <hr />
      <div>Fantasy Books:</div>
      <br />
      <div>
        <Form className="d-flex">
          <Form.Control type="text" placeholder="Search in Fantasy books..." />
          <Button variant="primary">Search</Button>
        </Form>
      </div>
      <br />
      <Row>
        {listOfBooks.map((book) => (
          <SingleBook singleBookObject={book} />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
