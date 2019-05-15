import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

import "./App.scss";

//routing for application

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/favorites" component={Favorites} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
