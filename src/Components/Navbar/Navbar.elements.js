import styled from "styled-components";
import { CgPokemon } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: rgb(var(--secondary));
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;

  ${Container}
`;

export const NavLogo = styled(Link)`
  font-family: "Paytone One", sans-serif;
  font-size: 32px;
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(CgPokemon)`
  font-size: 64px;
  margin-right: 5px;
`;

export const NavSearch = styled.div``;

export const NavSearchInput = styled.input``;

export const NavSearchButton = styled.button``;
