import { useContext } from "react";
import { CartContext } from "../Contexts/cartContext";

import CardOrder from "../Component/CartPage/CartOrder";

import { Container, FormControl, Button, InputGroup } from "react-bootstrap";
import Logo from "../Assets/Images/map.svg";

const CartPage = () => {
  const [state, dispatch] = useContext(CartContext);

  return (
    <div className="container-fluid container-cart">
      <Container style={{ marginTop: "73px" }} className="d-flex flex-column">
        <h2>Geprek Bensu {state.carts.title}</h2>
        <h6>Delivery Location</h6>
        <InputGroup className="mb-3 input-group">
          <FormControl
            type="text"
            placeholder="Search"
            className=" mr-sm-2 input-map mb-2"
          />
          <Button variant="transparant" type="submit" className="btn-map">
            Select On Map
            <img alt={Logo} src={Logo} className="ml-2 align-top" />
          </Button>
        </InputGroup>
        <h6 style={{ marginBottom: "0px" }}>Review Your Order</h6>
        <div className="d-flex flex-row justify-content-between content">
          <div className="col-sm-8 flex-column content-right">
            <hr />
            {/* Loop start */}
            <CardOrder product={state} />
            {/* Loop end */}
          </div>
          <div className=" col-sm-4 flex-column content-left">
            <hr />
            <div className="d-flex mb-2">
              <div className="sub-text">Subtotal</div>
              <div className="ml-auto sub-text text-red">Rp35.000</div>
            </div>
            <div className=" d-flex mb-2">
              <div className="sub-text">Qty</div>
              <div className="ml-auto sub-text">{state.carts.length}</div>
            </div>
            <div className=" d-flex mb-2">
              <div className="sub-text">Ongkir</div>
              <div className="ml-auto sub-text text-red">10.000</div>
            </div>
            <hr />
            <div className="d-flex">
              <div className="sub-text text-red text-bold">Total</div>
              <div className="ml-auto sub-text text-red text-bold">45.000</div>
            </div>
            <div className=" d-flex order-btn justify-content-end align-items-start">
              <Button className="btn-order">Order</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
