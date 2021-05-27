import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./history";
import GlobalStyle from "./globalStyles";
import {
  Navbar,
  ScrollArrow,
  AdvancedSearch,
  PokemonList,
  PokemonListByType,
  PokemonListByAbility,
  PokemonShow,
} from "./Components";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router history={history}>
        <Navbar history={history} />
        <ScrollArrow />
        <AdvancedSearch history={history} />
        <Switch>
          <Route path="/" exact component={PokemonList} />
          <Route path="/type/:type" exact component={PokemonListByType} />
          <Route
            path="/ability/:ability"
            exact
            component={PokemonListByAbility}
          />
          <Route path="/pokemon/:pokemon" exact component={PokemonShow} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
