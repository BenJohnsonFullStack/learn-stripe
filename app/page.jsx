import { Row, Col } from "react-bootstrap";
import { products } from "@/constants";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the Store.
      </h1>
      <Row xs={1} md={3} className="g-4 mt-4">
        {products.map((product) => (
          <Col align="center" key={product.id}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
