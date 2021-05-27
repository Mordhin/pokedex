import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemon } from "../../actions/pokemonActions";
import { ShowContainer, StyledGrid } from "./PokemonShow.elements";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonObject = useSelector((state) => state.PokemonObject);
  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, [pokemonName]);

  window.scrollTo({
    top: 400,
    left: 0,
    behavior: "smooth",
  });

  const ShowData = () => {
    if (!_.isEmpty(pokemonObject.data[pokemonName])) {
      console.log(pokemonObject.data[pokemonName]);
      return (
        <div>
          <StyledGrid data={pokemonObject.data[pokemonName]}></StyledGrid>
        </div>
      );
    }

    if (pokemonObject.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonObject.errorMsg !== "") {
      return <p>{pokemonObject.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  return <ShowContainer>{ShowData()}</ShowContainer>;
};

export default Pokemon;
