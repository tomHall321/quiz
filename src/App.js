import Multiplier from "./components/Multiplier.js";
import EvenClicks from "./components/EvenClicks.js";
import React from "react";

const App = () => {
  return (
      <>
         <Multiplier x={ 50 } y={ 100 } />
         <EvenClicks/>
      </>
  );
};

export default App;