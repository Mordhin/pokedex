import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonAllByAbility } from "../../actions/pokemonActions";
import PokemonCard from "../PokemonCard/PokemonCard";
import {
  ListContainer,
  ListGrid,
  SearchCount,
  LoadMoreBtn,
  NoMore,
  AbilityTag,
} from "./PokemonList.elements";
import { MdExpandMore } from "react-icons/md";

const PokemonListByAbility = (props) => {
  const ability = props.match.params.ability;
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(24);
  const perPage = 24;
  const pokemonSearch = useSelector((state) => state.PokemonSearch);
  const pokemonCard = useSelector((state) => state.PokemonCard);

  useEffect(() => {
    dispatch(GetPokemonAllByAbility(ability));
  }, [ability]);

  const loadMore = () => {
    setLoaded(loaded + perPage);
  };

  const ShowList = () => {
    if (!_.isEmpty(pokemonSearch.results)) {
      return (
        <>
          <ListGrid>
            <SearchCount>
              We found {pokemonSearch.count} <AbilityTag>{ability}</AbilityTag>{" "}
              pokemons:
            </SearchCount>
            {pokemonSearch.results.slice(0, loaded).map((pokemon) => {
              return ShowPokeInfo(pokemon.pokemon);
            })}
          </ListGrid>
        </>
      );
    }

    if (pokemonSearch.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonSearch.errorMsg !== "") {
      return <p>{pokemonSearch.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  const ShowPokeInfo = (pokemonFromList) => {
    if (!_.isEmpty(pokemonCard.data)) {
      return (
        <PokemonCard
          pokemonFromList={pokemonFromList}
          pokemonData={pokemonCard.data[pokemonFromList.name]}
        />
      );
    }

    if (pokemonCard.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonCard.errorMsg !== "") {
      return <p>{pokemonCard.errorMsg}</p>;
    }

    return <p>unable to get pokeInfo</p>;
  };

  const ShowButton = () => {
    if (loaded >= pokemonSearch.count) {
      return <NoMore>You've seen them all!</NoMore>;
    } else {
      return (
        <LoadMoreBtn onClick={() => loadMore()}>
          See More <MdExpandMore />
        </LoadMoreBtn>
      );
    }
  };

  return (
    <ListContainer>
      {ShowList()}
      {ShowButton()}
    </ListContainer>
  );
};

export default PokemonListByAbility;
