import React from 'react';
import { Album } from './Album';

export const NewsList = (props) => {
  return (
    <section>
      {props.articlesList.articles.map((singleArticle) => {
        return (
          <Album key={singleArticle.id} albums={singleArticle} />
        )
      })}
    </section>
  );
};

