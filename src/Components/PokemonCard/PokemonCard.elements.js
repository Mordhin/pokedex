import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const CardBox = styled.div`
  background: linear-gradient(90deg, ${(props) => props.gradientcolor});
  height: 300px;
  width: 250px;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  box-shadow: none;
  display: flex;
  justify-content: center;
  position: relative;
  top: 0px;
  transition: all 0.1s ease;
  &:hover {
    top: -5px;
    box-shadow: 2px 2px 10px #0000001a;
  }
`;

export const CardImg = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

export const PokemonTitle = styled.div`
  max-width: 150px;
  margin: 10px auto;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonId = styled.div`
  color: darkgray;
`;

export const PokemonName = styled.div`
  color: black;
  font-weight: bold;
  margin-left: 5px;
`;

export const PokemonTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonType = styled.div`
  background-color: ${(props) => props.bgcolor};
  color: white;
  font-family: "Exo", sans-serif;
  font-weight: 300;
  text-decoration: none;
  height: 25px;
  width: 80px;
  margin: 5px 5px;
  padding: 2px;
  border: 1px solid #0000001a;
  border-radius: 4px;
  box-shadow: 2px 2px 5px #0000001a;
  display: flex;
  justify-content: center;
  align-items: center;
`;
