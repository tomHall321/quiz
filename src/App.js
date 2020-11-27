import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Multiplier from "./components/Multiplier.js";
import React from "react";

const App = () => {
  return (
      <>
        <Multiplier/>
      </>
  );
};

export default App;