import { Card, Col } from "react-bootstrap";

const CardProductDetail = ({ product, addMenuToCart }) => {
  const { title, img, price } = product;

  return (
    <div>
      <Col className="mb-4">
        <Card
          style={{
            width: "250px",
            borderRadius: "5px",
            marginRight: "20px",
          }}
        >
          <Card.Body className="d-flex flex-column align-items-center card-body-detail">
            <div>
              <Card.Img src={img} alt={img} className="card-img" />
            </div>
            <div className="d-flex flex-column align-self-start mt-2">
              <Card.Title className="card-product-title mb-3 text-nowrap">
                {title}
              </Card.Title>
              <Card.Subtitle className="align-self-start card-product-price mb-2">
                Rp {price}
              </Card.Subtitle>
            </div>
            <div className="align-self-stretch">
              <button
                className="btn btn-order btn-block"
                onClick={() => addMenuToCart(product)}
              >
                Order
              </button>{" "}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CardProductDetail;
