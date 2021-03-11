import React from 'react'
import data from './data.json'

console.log(data)

export const App = () => {
  const exampleHeading = 'Welcome to my website!';
  const imageSrc = 'https://via.placeholder.com/150';

  return (
    <>
        <header>
            <h1>Article website</h1>
        </header>
        <div>
            <h3>{exampleHeading}</h3>
            <p>Spring is coming!</p>
            <img src={imageSrc} alt="Spring" />      
        </div>
    </>
  )
}

export default App;
