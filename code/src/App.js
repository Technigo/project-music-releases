import React from "react";

import data from "./data.json";
import CardContainer from "./Components/CardContainer";
import Heading from "./Components/Heading";

const App = () => {
  return ( 
    <>
      <Heading/>
      <CardContainer data={data.albums.items} />
    </>
  );
};
 
export default App;
