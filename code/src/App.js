import React from 'react';
import data from './data.json';

import Album from './components/Album';

const App = () => {
  return (
    <>
      <h1>New Albums and singles</h1>
      <div className='container'>
        {data.albums.items.map((item) => (
          <Album key={item.id} albumContent={item} />
        ))}
      </div>
    </>
  );
};

export default App;
