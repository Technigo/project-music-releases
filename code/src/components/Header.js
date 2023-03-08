import React from 'react';
import './style.css'

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;