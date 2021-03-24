import { useState } from "react";

import { Modal, Button } from "react-bootstrap";

const Sign = ({ handleLogin, handleRegister }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseRegister = () => setShowRegister(false);

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
          <h2 className="text-color">Login</h2>
          <div className="modal-form mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>
          <div className="modal-form mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Password"
            />
          </div>
          <div className="modal-form mb-3">
            <button
              type="submit"
              className="btn btn-submit btn-block"
              onClick={handleLogin}
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
