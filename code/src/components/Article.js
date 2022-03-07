import React from 'react'

export const Article = (props) => {
    console.log(props)
    
return (
      <article className="article"> 
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>date </p>
        <img src="https://www.placecage.com/200/300" alt="nicolas"/>
      <div className="tag-container">
        <span className="tag">programming</span>
        <span className="tag">react</span>
        <span className="tag">learning</span>
      </div>
      </article>
    )
}

