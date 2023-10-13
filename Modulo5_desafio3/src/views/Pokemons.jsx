import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsSelected, setPokemonsSelected] = useState("");
  const navigate = useNavigate();

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemons = async () => {
    const rest = await fetch(url);
    const { results } = await rest.json();
    setPokemons(results);
  };
const goToPokemons =async()=>{
  pokemonsSelected ? navigate(`/pokemons/${pokemonsSelected}`):alert("Debes seleccionar un pokemon")

}


  useEffect(() => {
    getPokemons();
  }, []);

  console.log(pokemons);

  return (
    <div className="mt-5 text-center">
      <h1>Escoje un pokemon</h1>
      <div className="col-5 col-sm-3 col-lg-2 mx-auto">
        <select
          value={pokemonsSelected}
          className="form-select text-center"
          onChange={({target})=>setPokemonsSelected(target.value)}
        >
          <option value="" disabled>
            Pokemon
          </option>
          {pokemons.map(({ name }, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>
        <Button
          variant="dark"
          className="mt-3"
          onClick={goToPokemons}
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default Pokemons;
