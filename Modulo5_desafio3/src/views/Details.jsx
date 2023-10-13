import React, { useEffect, useState } from "react";
import PokeCards from "../components/PokeCards";
import { useParams } from "react-router-dom";

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async (name) => {
    try {
      const res = await fetch(`${url}/${name}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      const src = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat,
      }));
      const type = data.types.map(({ type }) => type.name).join(" ");
      setPokemon({ name, stats, src, type });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPokemon(name);
  }, [name]);

  console.log(pokemon);

  return <PokeCards pokemon={pokemon} />;
};

export default Details;
