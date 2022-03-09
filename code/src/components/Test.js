import React from 'react';

const Example = (props) => {

    console.log(props)
    return (
        <div className='another-border'>
            Hello {props.name} {props.title}!
        </div>
      )
}

export default Example;

//OBS! Namnet på funktionen och det du exporterar måste stämma med varandra. Namnet på komponentfilen (Test) används sedan i App.js. 