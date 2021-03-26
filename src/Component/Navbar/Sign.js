import { useState, useContext } from "react";
import { API, setAuthToken } from "../../Config/api";
import { UserContext } from "../../Contexts/userContext";

import { Modal, Button } from "react-bootstrap";

const Sign = ({ handleRegister }) => {
  const [state, dispatch] = useContext(UserContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseRegister = () => setShowRegister(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        email,
        password,
      });

      const response = await API.post("/login", body, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data.user,
      });

      setAuthToken(response.data.data.token);
      console.log(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        variant="transparent"
        className="sign-btn text-form"
        onClick={() => setShowRegister(true)}
      >
        Register
      </Button>

      <Button
        variant="transparent"
        className="sign-btn text-form ml-3"
        onClick={() => setShowLogin(true)}
      >
        Login
      </Button>

      <Modal
        show={showLogin}
        onHide={handleCloseLogin}
        className="modal-container "
      >
        <div className="modal-body modal-body-login">
          <form action="" onSubmit={(e) => onSubmit(e)}>
            <h2 className="text-color">Login</h2>
            {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
            <div className="modal-form mb-3">
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div className="modal-form mb-3">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </div>
            <div className="modal-form mb-3">
              <button
                type="submit"
                className="btn btn-submit btn-block"
                // onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="modal-form mb-3">
              <p>
                Dont have an account ? Click{" "}
                <a
                  href="#"
                  className="link"
                  onClick={() => {
                    handleCloseLogin();
                    setShowRegister(true);
                  }}
                >
                  <strong>Here</strong>
                </a>
              </p>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        show={showRegister}
        onHide={handleCloseRegister}
        className="modal-container"
      >
        <div class="modal-body modal-body-register">
          <h2 className="text-color">Register</h2>
          <div class="modal-form mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>
          <div class="modal-form mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Password"
            />
          </div>
          <div class="modal-form mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Full Name"
            />
          </div>
          <div class="modal-form mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Gender"
            />
          </div>
          <div class="modal-form mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Phone"
            />
          </div>
          <div class="modal-form mb-3">
            <select
              class="form-control custom-select"
              aria-label="Default select example"
            >
              <option value="User" selected>
                As User
              </option>
              <option value="Parter">Partner</option>
            </select>
          </div>
          <div class="modal-form mb-3">
            <button
              type="submit"
              class="btn btn-submit btn-block"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
          <div class="modal-form mb-3">
            <p>
              Already have an account ? Click{" "}
              <a
                href="#"
                className="link"
                onClick={() => {
                  handleCloseRegister();
                  setShowLogin(true);
                }}
              >
                <strong>Here</strong>
              </a>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Sign;
