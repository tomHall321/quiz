import Multiplier from "./components/Multiplier.js";
import EvenClicks from "./components/EvenClicks.js";
import CountBy from "./components/CountBy.js";
import HideMe from "./components/HideMe.js";
import React from "react";

const App = () => {
  return (
      <>
         <Multiplier x={ 50 } y={ 100 } />
         <EvenClicks/>
         <CountBy step={ 5 }/>
         <HideMe>Click to Hide</HideMe>
      </>
  );
};

export default App;