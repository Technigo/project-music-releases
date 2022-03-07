import React from 'react'

import { Article } from 'components/Article'
// import data from './data.json'

// console.log(data)
// divs down


export const App = () => {
  return (<section>
    <Article 
    title="Hello Technigo!"
    description="some text"
    />
    <Article 
    title="second!"
    description="some other"
    />
  </section>
    // <article className="article"> 
    //   <h2>Hello Technigo!</h2>
    //   <p>some text</p>
    //   <p>date </p>
    //   <img src="https://www.placecage.com/200/300" alt="nicolas"/>
    // <div className="tag-container">
    //   <span className="tag">programming</span>
    //   <span className="tag">react</span>
    //   <span className="tag">learning</span>
    // </div>
    // </article>
  )
}
