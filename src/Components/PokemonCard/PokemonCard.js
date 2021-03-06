import React from "react";
import _ from "lodash";
import {
  CardLink,
  CardBox,
  CardImg,
  PokemonTitle,
  PokemonId,
  PokemonName,
  PokemonTypes,
  PokemonType,
} from "./PokemonCard.elements";
import pokeball from "../../assets/pokeball.png";

const PokemonCard = ({ pokemonData, pokemonFromList }) => {
  if (pokemonData) {
    return (
      <CardBox gradientcolor={HandleGradient(pokemonData.types)}>
        <CardLink to={`/pokemon/${pokemonFromList.name}`}>
          <CardImg src={ShowImg(pokemonData.sprite)}></CardImg>
          <PokemonTitle>
            <PokemonId>#{pokemonData.id}</PokemonId>
            <PokemonName>{pokemonFromList.name}</PokemonName>
          </PokemonTitle>
          <PokemonTypes>
            {pokemonData.types.map((typeData) => {
              return (
                <PokemonType bgcolor={`var(--${typeData.type.name})`}>
                  {_.capitalize(typeData.type.name)}
                </PokemonType>
              );
            })}
          </PokemonTypes>
        </CardLink>
      </CardBox>
    );
  } else {
    return "" /* loading */;
  }
};

const ShowImg = (sprite) => {
  if (sprite) {
    return sprite;
  } else {
    return pokeball;
  }
};

/*        background: linear-gradient(#e66465, #9198e5);          */
const HandleGradient = (pokemonDataTypes) => {
  if (pokemonDataTypes.length > 1) {
    return `var(--${pokemonDataTypes[0].type.name}-bg), var(--${pokemonDataTypes[1].type.name}-bg)`;
  } else if (pokemonDataTypes.length === 1) {
    return `var(--${pokemonDataTypes[0].type.name}-bg), var(--${pokemonDataTypes[0].type.name}-bg)`;
  } else {
    return "#fff, #fff";
  }
};

export default PokemonCard;
