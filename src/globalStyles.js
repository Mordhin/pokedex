import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;

  --primary: 37, 66, 196;
  --secondary: 16, 21, 34;

  --bug: #bbcc51; /* suffix 1A = 10% opacity */
  --bug-bg: #bbcc511a;
  --dark: #707070;
  --dark-bg: #7070701A;
  --dragon: #4181a0;
  --dragon-bg: #4181a01A;
  --electric: #EFD534;
  --electric-bg: #EFD5341A;
  --fairy: #FDB9E9;
  --fairy-bg: #FDB9E91A;
  --fighting: #ce382d;
  --fighting-bg: #ce382d1A;
  --fire: #FD7D24;
  --fire-bg: #FD7D241A; 
  --flying: #8ac2d8;
  --flying-bg: #8ac2d81A;
  --ghost: #7C62A3;
  --ghost-bg: #7C62A31A;
  --grass: #71bc4b;
  --grass-bg: #71bc4b1A;
  --ground: #AB9842;
  --ground-bg: #AB98421A;
  --ice: #51C4E7;
  --ice-bg: #51C4E71A;
  --normal: #a4acaf;
  --normal-bg: #a4acaf1A;
  --poison: #B97FC9;
  --poison-bg: #B97FC91A;
  --psychic: #F366B9;
  --psychic-bg: #F366B91A;
  --rock: #e09b47;
  --rock-bg: #e09b471A;
  --steel: #9EB7B8;
  --steel-bg: #9EB7B81A;
  --water: #4592C4;
  --water-bg: #4592C41A;
  /* --unknown: ;
  --unknown-bg: ;
  --shadow: ;
  --shadow-bg: ; */
}

body {
  background: rgb(var(--secondary));
}
`;

export const Container = styled.div`
  width: 100%;
  margin: 50px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GlobalStyle;
