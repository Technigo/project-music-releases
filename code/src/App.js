import React from 'react';
import data from './data.json';
import Header from './components/Header'

console.log(data);
// named export
export const App = () => (
  <>
    {/* <Header text = "testing the props"/> */}
    {data.albums.items.map((item) => <Header key={item.id} data={item} text="testing the props" />)}
  </>
)

// default export
// export default App