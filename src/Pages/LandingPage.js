import { Container, Jumbotron, Row } from "react-bootstrap";
import HeroImage from "../Assets/Images/Hero.png";

import CardPopular from "../Component/LandingPage/CardPopular";
import CardRestaurant from "../Component/LandingPage/CardRestaurant";
import { PopularRestaurants, Restaurants } from "../API/data";

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Jumbotron
        fluid
        className="hero-section"
        style={{ backgroundColor: "#FFC700" }}
      >
        <Container className="container d-flex justify-content-center">
          <div className="d-flex flex-column justify-content-center align-items-center sub-hero mr-5">
            <h2 className="hero-text mb-2">Are You Hungry ?</h2>
            <h2 className="hero-text mb-4">Express Home Delivery </h2>
            <div className="d-flex justify-content-center subsuper-hero">
              <div className="d-flex mr-5 line-hero">{/*  */}</div>
              <div className="d-flex sub-text">
                <p className="hero-text-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  omnis nulla fuga quibusdam dolores. Iste sequi harum eligendi,
                  nulla inventore deserunt doloribus ut porro magnam.
                </p>
              </div>
            </div>
          </div>
          <div className="sub-hero">
            <img src={HeroImage} alt="" className="hero-img" />
          </div>
        </Container>
      </Jumbotron>
      {/* Content Section */}
      <div
        style={{ marginLeft: "190px", marginRight: "190px", marginTop: "60px" }}
      >
        <Container className="d-flex flex-column align-items-sm-start">
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "30px",
              fontFamily: "serif",
              fontWeight: "800",
            }}
          >
            Popular Restaurant
          </h2>
          <Row xs={1} md={4} className="d-flex flex-wrap ">
            {PopularRestaurants.map((PopularRestaurant) => (
              <CardPopular PopularRestaurant={PopularRestaurant} />
            ))}
          </Row>
        </Container>

        <Container
          style={{ marginTop: "90px" }}
          className="d-flex flex-column align-items-sm-start"
        >
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "30px",
              fontFamily: "serif",
              fontWeight: "800",
            }}
          >
            Restaurant Near You
          </h2>
          <Row xs={1} md={4} className="d-flex">
            {Restaurants.map((Restaurant) => (
              <div key={Restaurant.id}>
                <CardRestaurant Restaurant={Restaurant} />
              </div>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
