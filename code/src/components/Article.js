import React from 'react';

export const Article = (props) => {

    console.log(props)
    return (
        <article className='article'>
          <h2>{props.title}</h2>
          <p>{props.description}.</p>
          <p>7th of March 2022</p>
          <img src='https://www.placecage.com/200/300' alt='Nicholas Cage' />
          <div className='tag-container'>
            <span className='tag'>Programming</span>
            <span className='tag'>React</span>
            <span className='tag'>Learning</span>
          </div>
        </article>
      )
}

//v2 Default export. Note! With this apporoach you can only export one file. Meaning you can not create another function. 

// const Article = () => {
//     return (
//         <article className='article'>
//           <h2>Students of jan 2022 class seems to like React</h2>
//           <p>According to newest studies, jan2022 class have spoken - React is the best framework/library to learn in 2022.</p>
//           <p>7th of March 2022</p>
//           <img src='https://www.placecage.com/200/300' alt='Nicholas Cage' />
//           <div className='tag-container'>
//             <span className='tag'>Programming</span>
//             <span className='tag'>React</span>
//             <span className='tag'>Learning</span>
//           </div>
//         </article>
//       )
// }

// export default Article;