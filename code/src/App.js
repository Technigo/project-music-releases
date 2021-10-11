import React from 'react'
import data from './data.json'
import Article from './components/Article'

console.log(data)

export const App = () => {
    // one line of code 
// return <div>heellooo</div>
  return (
    // react code - looks like html but it is only convenience for us. Is complex code behind.
    <div>
      <Article 
        // passing props
        title="spring is coming"
        description="Just a description"
        img="https://picsum.photos/150/150"
      />
            <Article 
        // passing props
        title="spring is coming"
        description="Just a description"
        img="https://picsum.photos/250/250"
      />
    </div>
    //react code ends
  )
}
