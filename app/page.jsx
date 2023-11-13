import { Row, Col } from "react-bootstrap";
import { products } from "@/constants";

export default function Home() {
  return (
    <>
      <h1>Welcome to the Store.</h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col align="center" key={product.id}>
            <h2>{product.title}</h2>
          </Col>
        ))}
      </Row>
    </>
  );
}
