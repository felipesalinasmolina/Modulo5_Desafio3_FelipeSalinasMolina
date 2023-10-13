import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const PokeCards = ({ pokemon }) => {
  const { name, stats, src, type } = pokemon;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon`);
  };

  return (
    <>
      <section className="container text-center">
        <Card
          style={{ width: "37rem" }}
          className="mt-5 mx-auto text-center shadow-lg p-3 mb-5 bg-success rounded text-white"
        >
          <Card.Img height={300} src={src} />
          <Card.Body>
            <Card.Title className="fw-bold">{name}</Card.Title>
            <span className="list-unstyled text-start">
              <Card.Text className="fw-bold text-center">
                {stats?.map((stat, i) => (
                  <li key={i}>
                    {stat.name}:{stat.base}
                  </li>
                ))}
              </Card.Text>
            </span>
            <Card.Text className="bg-primary text-white p-2 rounded fw-bold text-center text-capitalize mt-3">
              {type}
            </Card.Text>
          </Card.Body>
        </Card>
        <button
          onClick={handleClick}
          className="btn btn-info btn-lg btn-block mt-1"
        >
          {" "}
          back{" "}
        </button>
      </section>
    </>
  );
};

export default PokeCards;
