import { Table } from "react-bootstrap";

import Success from "../Assets/Images/success.svg";
import Cancel from "../Assets/Images/cancel.svg";
import Pending from "../Assets/Images/pending.svg";
import ButtonApprove from "../Assets/Images/button-approve.svg";
import ButtonCancel from "../Assets/Images/button-cancel.svg";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="container-edit">
        <div className="profile">
          <h3 className="title-profile">Income Transaction</h3>
          <div className="profile-wrapper">
            <Table bordered hover className="table-list">
              <thead style={{ backgroundColor: "#E5E5E5" }}>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Product Order</th>
                  <th>Status</th>
                  <th style={{ textAlign: "center", width: "191px" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#FFF" }}>
                <tr>
                  <td>1</td>
                  <td>Sugeng No Pants</td>
                  <td>Cilengsi</td>
                  <td>Paket Geprek</td>
                  <td className="text-warning">Waiting Approve</td>
                  <td className="tb-action">
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-cancel mr-2"> Cancel</button>
                      <button className="btn btn-approve"> Approve</button>
                    </div>
                    {/* <img
                      src={ButtonApprove}
                      alt="{ButtonApprove}"
                      style={{ marginRight: "10px" }}
                    /> */}
                    {/* <img src={ButtonCancel} alt="{ButtonCancel}" /> */}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Haris Gams</td>
                  <td>Serang</td>
                  <td>Paket Geprek</td>
                  <td className="text-success">Success</td>
                  <td className="tb-action">
                    <img src={Success} alt="{Success}" />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Aziz Union</td>
                  <td>Bekasi</td>
                  <td>Paket Geprek</td>
                  <td className="text-danger">Cancel</td>
                  <td className="tb-action">
                    <img src={Cancel} alt="{Cancel}" />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Lae Tanjung balai</td>
                  <td>Tanjung Balai</td>
                  <td>Paket Geprekt</td>
                  <td className="text-primary">On The Way</td>
                  <td className="tb-action">
                    <img src={Pending} alt="{Pending}" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
