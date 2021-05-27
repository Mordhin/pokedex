import React, { useState, useEffect } from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavSearch,
  NavSearchInput,
  NavSearchButton,
} from "./Navbar.elements";

const Navbar = (props) => {
  const [search, setSearch] = useState("");
  const defaultPH = "search a pokemon";

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            POKEDEX
          </NavLogo>
          {/* <NavSearch>
            <NavSearchInput
              type="text"
              placeholder={defaultPH}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <NavSearchButton
              onClick={() => {
                props.history.push(`/pokemon/${search.toLowerCase()}`);
                setSearch("");
              }}
            >
              Search
            </NavSearchButton>
          </NavSearch> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
