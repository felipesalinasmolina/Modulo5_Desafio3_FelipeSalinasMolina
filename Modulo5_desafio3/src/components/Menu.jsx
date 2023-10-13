import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const activeClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <Navbar
      className="d-flex justify-content-between px-5"
      variant="light"
      style={{ background: "green" }}
    >
      <Navbar.Brand>
        <img
          width="50"
          src="https://cdn.icon-icons.com/icons2/3395/PNG/512/pokemon_icon_213976.png"
          alt="icono pokeball"
        />
      </Navbar.Brand>

      <div className="text_link">
        <NavLink className={activeClass + "m-3"} to="/">
          {" "}
         <p>Home</p> 
        </NavLink>

        <NavLink className={activeClass} to="/pokemons">
        <p>Pokemones</p> 
        </NavLink>
      </div>
    </Navbar>
  );
};

export default Menu;
