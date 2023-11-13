import { Row, Col } from "react-bootstrap";

const Page = () => {
  return (
    <>
      <h1>Thanks for your purchase.</h1>
      <Row xs={1} md={3} className="g-4">
        <Col align="center">
          <h2>Product1</h2>
        </Col>
        <Col align="center">
          <h2>Product2</h2>
        </Col>
      </Row>
    </>
  );
};

export default Page;
