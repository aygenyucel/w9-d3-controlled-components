import { Card, Col } from "react-bootstrap";
import "./SingleBook.css";

function SingleBook(props) {
  let { singleBookObject } = props;
  return (
    <Col xs={6} md={4} lg={3} className="mb-3" key={singleBookObject.asin}>
      <Card>
        <Card.Img variant="top" src={singleBookObject.img} />
        <Card.Body className="d-flex align-items-center justify-content-center">
          <Card.Title>{singleBookObject.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
