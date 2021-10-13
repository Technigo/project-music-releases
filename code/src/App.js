import React from 'react'
import data from './data.json'
import data2 from './data2.json'
import Article from './components/Article'

console.log(data)
console.log(data2)

export const App = () => {
    // one line of code 
// return <div>heellooo</div>
  return (
    // react code - looks like html but it is only convenience for us. 
    // Is complex code behind.
    <div>
      {data2.map((article) => (
        <Article 
        // passing props
          title={article.title}
          description={article.description}
          date={article.publishDate}
          img={article.imgURL}
          tags={article.tags}
        />
        ))}
      {/* another way of doing it */}
      {/* <Article articleData={data} /> */}
    </div>
    //react code ends
  )
}
