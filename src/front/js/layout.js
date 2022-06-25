import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";

import { Home } from "./pages/home.js";
import { PlanetDetails } from "./pages/PlanetDetails.js";
import { CharacterDetails } from "./pages/CharacterDetails.js";
import { Login } from "./pages/login.js";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import { Context } from "./store/appContext.js";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const [favorites, setFavorites] = useState([]);
  const { store, actions } = useContext(Context);
  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar favorites={favorites} />
          <Switch>
            <Route exact path="/">
              <Home favorites={favorites} />
            </Route>
            <Route exact path="/character/:theuid">
              <CharacterDetails />
            </Route>
            <Route exact path="/planet/:theuid">
              <PlanetDetails />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
