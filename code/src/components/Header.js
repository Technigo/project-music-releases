import React from 'react';
import 'style/styling.css'
import 'index.css'

const Header = (props) => {
  console.log(props);
  return (
    <header className="Header">
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;