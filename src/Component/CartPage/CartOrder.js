import { useContext } from "react";
import { CartContext } from "../../Contexts/cartContext";

import { Button } from "react-bootstrap";

import Delete from "../../Assets/Images/delete.png";

const CartOrder = () => {
  const [state, dispatch] = useContext(CartContext);

  const addMenuToCart = (id) => {
    dispatch({
      type: "ADD_CART",
      payload: { id },
    });
  };

  const removeMenuFromCart = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: { id },
    });
  };

  const deleteCart = (id) => {
    dispatch({
      type: "DELETE_CART",
      payload: { id },
    });
  };

  return (
    <>
      {state.carts.map((cart) => (
        <div className="container-order">
          {console.log(cart.qty)}
          <div className="d-flex justify-content-between content-wrapper">
            <div className="">
              <img alt={cart.img} src={cart.img} className="cart-img" />
            </div>

            <div className="d-flex justify-content-between flex-column col-md-10 mr-4 content">
              <div className="d-flex">
                <div className="mt-2">{cart.title}</div>
                <div className="ml-auto mt-2 text-red">Rp{cart.price}</div>
              </div>
              {/* <div className="d-flex mb-3" style={{ backgroundColor: "blue" }}>
                <div>{cart.title}</div>
                <div className="ml-auto text-red">Rp{cart.price}</div>
              </div> */}
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <button
                    className="d-flex btn btn-counter btn-plus-minus"
                    onClick={() => removeMenuFromCart(cart.id)}
                  >
                    -
                  </button>
                  <div className="d-flex btn btn-counter btn-counter-color">
                    {cart.qty}
                  </div>
                  <button
                    className="d-flex btn btn-counter btn-plus-minus"
                    onClick={() => addMenuToCart(cart.id)}
                  >
                    +
                  </button>
                </div>
                <div className="ml-auto">
                  <Button variant="transparant" className="btn">
                    <img
                      src={Delete}
                      alt={Delete}
                      className="btn-delete"
                      onClick={() => deleteCart(cart.id)}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default CartOrder;
