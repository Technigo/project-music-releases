import React from 'react';
import 'index.css'

const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;