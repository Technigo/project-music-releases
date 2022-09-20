import React from 'react';
import data from './data.json';
import Header from './components/Header'

console.log(data);
// named export

export const App = () => (
  <>
    {data.albums.item.map((item) => <Header key="{data.id}" data={item} text="testing the props" />)}
  </>
)

// default export
// export default App