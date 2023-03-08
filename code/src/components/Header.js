import React from 'react';

export const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}