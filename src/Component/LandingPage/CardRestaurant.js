import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/userContext";

import { useHistory } from "react-router-dom";

import { Card, Col } from "react-bootstrap";

const CardRestaurant = ({ Restaurant }) => {
  const history = useHistory();

  const [state, dispatch] = useContext(UserContext);

  const { id, title, distance, img } = Restaurant;

  return (
    <Col className="mb-4">
      <Card
        style={{
          width: "250px",
          height: "220px",
          borderRadius: "5px",
          marginRight: "20px",
        }}
      >
        <Card.Body className="d-flex flex-column align-items-center card-restaurant-body ">
          {state.isLogin ? (
            <Card.Img
              src={img}
              className="card-img"
              onClick={() => {
                history.push(`/detail/${id}`);
              }}
            />
          ) : (
            <>
              <Card.Img src={img} className="card-img" />
            </>
          )}

          <div className="d-flex flex-column align-self-start mt-2">
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Subtitle className="align-self-start card-subtitle">
              {distance} KM
            </Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardRestaurant;
