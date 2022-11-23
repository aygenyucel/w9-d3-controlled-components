import { Card, Col } from "react-bootstrap";

function SingleBook(props) {
  let { singleBookObject } = props;
  return (
    <Col xs={6} md={4} lg={3}>
      <Card>
        <Card.Img variant="top" src={singleBookObject.img} />
        <Card.Body>
          <Card.Title>{singleBookObject.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
