import React from 'react'

export const Header = (props) => {
  return (
    <h1 className="header-title">
      {props.headerName}
    </h1>
  );
};

