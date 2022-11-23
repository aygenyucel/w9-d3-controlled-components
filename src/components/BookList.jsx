import { Container, Row } from "react-bootstrap";
import fantasyBooks from "../booksData/fantasy.json";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  let { listOfBooks = fantasyBooks } = props;
  return (
    <Container>
      <hr />
      <div>Fantasy Books:</div>
      <Row>
        {listOfBooks.map((book) => (
          <SingleBook singleBookObject={book} />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
