import React from 'react';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1
        }}
    />
  );

export const Header = () => (
    <>
        <h1>New albums &amp; singles</h1>

        <ColoredLine 
        color="#a0a0a0" />
    </>
)