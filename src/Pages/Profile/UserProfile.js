import { Link } from "react-router-dom";

import FullProfile from "./../../Assets/Images/full-profile.png";
import Logo from "./../../Assets/Images/logo.svg";

const UserProfile = () => {
  return (
    <div>
      <div className="profile-container">
        <div className="profile">
          <h3 className="title-profile">My Profile</h3>
          <div className="profile-wrapper">
            <div className="left">
              <div className="img-wrapper">
                <img src={FullProfile} alt="" />
              </div>
              <Link to="/edit-user">
                <button>Edit Profile</button>
              </Link>
            </div>
            <div className="right">
              <div className="bio">
                <b>Full Name</b>
                <p>Andi</p>
              </div>
              <div className="bio">
                <b>Email</b>
                <p>andi@email.com</p>
              </div>
              <div className="bio">
                <b>Phone</b>
                <p>083896833122</p>
              </div>
            </div>
          </div>
        </div>
        <div className="history">
          <h3 className="title-profile">History Transactions</h3>
          <div className="list-history">
            <div className="wrapper-history">
              <div className="left">
                <p className="title">Geprek Bensu</p>
                <p className="date">
                  <b>Saturday</b>, 12 March 2021
                </p>
                <p className="total">
                  <b>Total</b> : Rp 45.000
                </p>
              </div>
              <div className="right d-flex flex-lg-column">
                <div className="logo">
                  <img src={Logo} alt="" />
                </div>
                <div className="status mt-4">
                  <p>Finished</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
