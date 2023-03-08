import React from 'react';

import { Albumcovers } from 'components/Albumcovers';
import { Artists } from './components/Artists';
import { Albums } from './components/Albums';

export const App = () => {
  return (
    <main>
      <header>
        <h1>New albums & singles</h1>
      </header>
    <section className="albumcontainer">
      <Albumcovers />
      <Artists />
      <Albums />
    </section>
    </main>
  );
}
