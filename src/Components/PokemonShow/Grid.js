import React from "react";
import _ from "lodash";
import {
  PokemonTitle,
  PokemonSprites,
  PokemonStats,
  PokemonSkills,
  PokemonName,
  PokemonId,
  PokemonTypes,
  DreamSprite,
  SmallSprite,
  SpriteGrid,
  ShowTitles,
  StatsList,
} from "./PokemonShow.elements";

import { PokemonType } from "../PokemonCard/PokemonCard.elements";

export const Grid = ({ className, data }) => {
  return (
    <div className={className}>
      <PokemonTitle>
        <PokemonName>{_.capitalize(data.name)}</PokemonName>{" "}
        <PokemonId>#{data.id}</PokemonId>
      </PokemonTitle>
      <PokemonSprites>
        <PokemonTypes>
          {data.types.map((typeData) => {
            return (
              <PokemonType bgcolor={`var(--${typeData.type.name})`}>
                {_.capitalize(typeData.type.name)}
              </PokemonType>
            );
          })}
        </PokemonTypes>
        <br />
        <DreamSprite
          src={data.sprites.other.dream_world.front_default}
        ></DreamSprite>
        <SpriteGrid>
          <SmallSprite src={data.sprites.front_default}></SmallSprite>
          <SmallSprite src={data.sprites.back_default}></SmallSprite>
          <SmallSprite src={data.sprites.front_shiny}></SmallSprite>
          <SmallSprite src={data.sprites.back_shiny}></SmallSprite>
          <SmallSprite src={data.sprites.front_female}></SmallSprite>
          <SmallSprite src={data.sprites.back_female}></SmallSprite>
          <SmallSprite src={data.sprites.front_shiny_female}></SmallSprite>
          <SmallSprite src={data.sprites.back_shiny_female}></SmallSprite>
        </SpriteGrid>
      </PokemonSprites>
      <PokemonStats>
        <ShowTitles>Stats :</ShowTitles>
        <StatsList>
          <li>Health Point: {data.stats[0].base_stat}</li>
          <li>Speed: {data.stats[5].base_stat}</li>
          <li>Attack: {data.stats[1].base_stat}</li>
          <li>Defense: {data.stats[2].base_stat}</li>
          <li>Special Attack: {data.stats[3].base_stat}</li>
          <li>Special Defense: {data.stats[4].base_stat}</li>
        </StatsList>
        <StatsList>
          <li>Height: {data.height * 10} cm</li>
          <li>Weight: {data.weight * 10} gr</li>
        </StatsList>
      </PokemonStats>
      <PokemonSkills>
        <ShowTitles>Abilities :</ShowTitles>
        <StatsList>
          <li>
            {data.abilities[0]
              ? data.abilities[0].ability.name
              : "No abilities"}
          </li>
          <li>{data.abilities[1] ? data.abilities[1].ability.name : null}</li>
          <li>{data.abilities[2] ? data.abilities[2].ability.name : null}</li>
          <li>{data.abilities[3] ? data.abilities[3].ability.name : null}</li>
        </StatsList>
      </PokemonSkills>
    </div>
  );
};
