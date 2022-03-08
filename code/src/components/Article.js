import React from 'react';

// import ReactDOM from 'react-dom'
//v1 Name export
export const Article = () => {

    return (
    <article class="article">
      <h2>Students of jan2022 class seems to loke React</h2>
      <p>According to newest studies, jan2022 class have spoken - React is the best framework</p>
      <p>7th of March, 2022</p>
      <img src="https://www.placecage.com/200/300" alt="Niclas Cage" />
      <div>
        <span>Programming</span>
        <span>React</span>
      </div>
    </article>
    
  )
}

// ReactDOM.render(<Article />, document.getElementById('root'))


// v2 Default export
// export const Article = () => {
//     return (
//     <article class="article">
//       <h2>Students of jan2022 class seems to loke React</h2>
//       <p>According to newest studies, jan2022 class have spoken - React is the best framework</p>
//       <p>7th of March, 2022</p>
//       <img src="https://www.placecage.com/200/300" alt="Niclas Cage" />
//       <div>
//         <span>Programming</span>
//         <span>React</span>
//       </div>
//     </article>
    
//   )
// }

// export default Article;