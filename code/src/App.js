//koden vi fick från början:
//import React from "react";
//import data from "./data.json";

//console.log(data);

//export const App = () => {
//return <div>Find me in src/app.js!</div>;
//};

//från daniel:
import React from "react";
import data from "./data.json";
import Albums from "./components/Albums";

console.log(data);
// named export
export const App = () => {
  return (
    <>
      {/* <Header text = "testing the props"/> */}
      {data.albums.items.map((item) => {
        return <Albums key={item.id} data={item} text="testing the props" />;
      })}
    </>
  );
};

// default export
// export default App
