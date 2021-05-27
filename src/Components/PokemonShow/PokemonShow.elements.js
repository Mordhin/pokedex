import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Grid } from "./Grid";

export const ShowContainer = styled(Container)`
  background: #fff;
  ${Container}
`;

export const StyledGrid = styled(Grid)`
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, max-content));
  grid-auto-rows: auto;
  grid-gap: 0 50px;

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 250px);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 250px);
  }
`;
export const PokemonTitle = styled.div`
  grid-column: 1/-1;
  grid-row: 1;
`;
export const PokemonName = styled.span`
  color: black;
  font-size: 32px;
  font-weight: bold;
`;

export const PokemonId = styled.span`
  color: lightgrey;
  font-size: 32px;
  font-weight: light;
`;

export const ShowTitles = styled.div`
  color: rgb(var(--secondary));
  font-size: 24px;
  margin-top: 50px;
`;

export const PokemonSprites = styled.div``; /* SPRITES COLUMN-------------------- */

export const PokemonTypes = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const DreamSprite = styled.img`
  width: 250px;
  margin: 50px 0;
`;

export const SpriteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0px;
  justify-items: center;
`;
export const SmallSprite = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  object-fit: none;
`;
export const PokemonStats = styled.div``; /* STATS COLUMN-------------------- */

export const StatsList = styled.ul`
  margin-top: 20px;
  padding: 0;
  line-height: 24px;

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const PokemonSkills = styled.div``; /* SKILLS COLUMN-------------------- */
