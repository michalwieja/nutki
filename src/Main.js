import React from "react";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/offer">
          <h1>oferta</h1>
        </Route>
        <Route path="/schedule">
          <h1>grafik</h1>{" "}
        </Route>
        <Route path="/price-list">
          <h1>Cennik</h1>{" "}
        </Route>
        <Route path="/contact">
          <h1>kontakt</h1>{" "}
        </Route>
        <Route path="/online">
          <h1>zapisy online</h1>{" "}
        </Route>
        <Route path="/">
          <h1>o nas</h1>{" "}
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
