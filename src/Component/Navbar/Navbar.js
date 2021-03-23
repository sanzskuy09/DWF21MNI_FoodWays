import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/userContext";

import ICProfile from "../../Assets/Images/user.svg";
import ICAddProduct from "../../Assets/Images/add-product.svg";
import ICLogout from "../../Assets/Images/logout.svg";

import { Dropdown, Button } from "react-bootstrap";
import Sign from "./Sign";

const Navbar = () => {
  const [state, dispatch] = useContext(UserContext);

  const loginUser = () => {
    dispatch({
      type: "LOGIN_USER",
    });
  };

  const loginPartner = () => {
    dispatch({
      type: "LOGIN_PARTNER",
    });
  };

  return (
    <nav className="navbar navbar-color">
      <div className="container-fluid">
        <div className="navbar-brand">
          <a href="" className="brand-title">
            FoodWays
            <img src="./images/brand-img.svg" alt="" className="ml-2" />
          </a>
        </div>
        <div className="navbar-brand d-flex align-items-center">
          {!state.isLogin ? (
            <Sign handleLogin={loginUser} handleRegister={loginPartner} />
          ) : (
            <>
              <img src="./images/cart-bag.png" alt="" className="img-cart" />
              <Dropdown className="ml-3">
                <Dropdown.Toggle
                  variant="transparen"
                  className="dropdown-after-login"
                >
                  <img src="./images/profil1.png" alt="" className="img-user" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-container">
                  <Link
                    to="/profilepartner"
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    <div className="menu-dropdown d-flex ">
                      <img src={ICProfile} alt="{ICProfile}" />
                      <p>Profile</p>
                    </div>
                  </Link>

                  {state.isPartner && (
                    <Link
                      to="/addproduct"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      <div className="menu-dropdown d-flex ">
                        <img src={ICAddProduct} alt="{ICAddProduct}" />
                        <p>Add Product</p>
                      </div>
                    </Link>
                  )}

                  <Dropdown.Divider style={{ backgroundColor: "black" }} />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    <div className="menu-dropdown d-flex ">
                      <img src={ICLogout} alt="{ICLogout}" />
                      <p>Logout</p>
                    </div>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>{" "}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
