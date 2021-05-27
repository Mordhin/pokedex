import React, { useState } from "react";
import {
  AdvancedSearchContainer,
  AdvancedSearchBox,
  AdvancedSearchByType,
  AdvancedSearchLabel,
  AdvancedSearchTypes,
  AdvancedSearchType,
  AdvancedSearchByAbility,
  AdvancedSearchAbilities,
  AdvancedSearchInput,
  AdvancedSearchButton,
  AdvancedSearchByAbilityAndName,
  AdvancedSearchByName,
  AdvancedSearchNames,
} from "./AdvancedSearch.elements";

const AdvancedSearch = ({ history }) => {
  const [NameSearch, setNameSearch] = useState("");
  const [AbilitySearch, setAbilitySearch] = useState("");

  return (
    <>
      <AdvancedSearchContainer>
        <AdvancedSearchBox>
          <AdvancedSearchByAbilityAndName>
            <AdvancedSearchByName>
              <AdvancedSearchLabel>Find a Pokemon:</AdvancedSearchLabel>
              <AdvancedSearchNames>
                <AdvancedSearchInput
                  type="text"
                  placeholder="ex: pikachu"
                  value={NameSearch}
                  onChange={(e) => setNameSearch(e.target.value)}
                />
                <AdvancedSearchButton
                  onClick={() => {
                    history.push(`/pokemon/${NameSearch.toLowerCase()}`);
                    setNameSearch("");
                  }}
                >
                  Search
                </AdvancedSearchButton>
              </AdvancedSearchNames>
            </AdvancedSearchByName>
            <AdvancedSearchByAbility>
              <AdvancedSearchLabel>Sort by Ability:</AdvancedSearchLabel>
              <AdvancedSearchAbilities>
                <AdvancedSearchInput
                  type="text"
                  placeholder="ex: intimidate"
                  value={AbilitySearch}
                  onChange={(e) => setAbilitySearch(e.target.value)}
                />
                <AdvancedSearchButton
                  onClick={() => {
                    history.push(`/ability/${AbilitySearch.toLowerCase()}`);
                    setAbilitySearch("");
                  }}
                >
                  Search
                </AdvancedSearchButton>
              </AdvancedSearchAbilities>
            </AdvancedSearchByAbility>
          </AdvancedSearchByAbilityAndName>
          <AdvancedSearchByType>
            <AdvancedSearchLabel>Sort by types:</AdvancedSearchLabel>
            <AdvancedSearchTypes>
              <AdvancedSearchType to="/type/fighting" bgcolor="var(--fighting)">
                Fighting
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/fire" bgcolor="var(--fire)">
                Fire
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/rock" bgcolor="var(--rock)">
                Rock
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/ground" bgcolor="var(--ground)">
                Ground
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/electric" bgcolor="var(--electric)">
                Electric
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/bug" bgcolor="var(--bug)">
                Bug
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/grass" bgcolor="var(--grass)">
                Grass
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/flying" bgcolor="var(--flying)">
                Flying
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/ice" bgcolor="var(--ice)">
                Ice
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/water" bgcolor="var(--water)">
                Water
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/dragon" bgcolor="var(--dragon)">
                Dragon
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/steel" bgcolor="var(--steel)">
                Steel
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/normal" bgcolor="var(--normal)">
                Normal
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/dark" bgcolor="var(--dark)">
                Dark
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/ghost" bgcolor="var(--ghost)">
                Ghost
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/poison" bgcolor="var(--poison)">
                Poison
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/fairy" bgcolor="var(--fairy)">
                Fairy
              </AdvancedSearchType>
              <AdvancedSearchType to="/type/psychic" bgcolor="var(--psychic)">
                Psychic
              </AdvancedSearchType>
            </AdvancedSearchTypes>
          </AdvancedSearchByType>
        </AdvancedSearchBox>
      </AdvancedSearchContainer>
    </>
  );
};

export default AdvancedSearch;
