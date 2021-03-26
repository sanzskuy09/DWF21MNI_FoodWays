import { useContext } from "react";
import { useParams } from "react-router-dom";

import { Container, Row } from "react-bootstrap";

import { Restaurants } from "../API/data";

import { CartContext } from "../Contexts/cartContext";

import CardProductDetail from "../Component/DetailPage/CardProductDetail";

const DetailPage = () => {
  const [state, dispatch] = useContext(CartContext);

  const addMenuToCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const params = useParams();
  const { id } = params;

  const getProduct = Restaurants.find((product) => product.id == id).product;
  const getName = Restaurants.find((product) => product.id == id).title;

  return (
    <>
      <div
        style={{ marginLeft: "190px", marginRight: "190px", marginTop: "60px" }}
      >
        <Container
          style={{ marginTop: "73px" }}
          className="d-flex flex-column align-items-sm-start"
        >
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "25px",
              fontFamily: "serif",
              fontWeight: "800",
            }}
          >
            {getName}, Menu <h1>{}</h1>{" "}
          </h2>
          {getProduct.length > 0 ? (
            <Row xs={1} md={4} className="d-flex">
              {getProduct.map((product) => (
                <CardProductDetail
                  product={product}
                  key={product.id}
                  addMenuToCart={addMenuToCart}
                />
              ))}
            </Row>
          ) : (
            <h4 style={{ marginTop: "200px" }}>Maaf Menu Tidak Tersedia</h4>
          )}
        </Container>
      </div>
      {/* <pre>{JSON.stringify(state.carts, 2, null)}</pre> */}
    </>
  );
};

export default DetailPage;
