import React from 'react';

export const Header = (props) => {
  return (
    <header>
      <h1>{props.headerNameInput}</h1>
      <hr />
    </header>
  );
};
