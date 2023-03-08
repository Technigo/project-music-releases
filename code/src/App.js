import React from 'react';
import data from './data.json';
import { Album } from 'components/Album';


console.log(data);

export const App = () => {
  return (
    <div>
      Find me in src/app.js!
      <Album artistList={data}/>
    </div>
  );
}


/*export const App = () => {
	return (
		<section>
			<Header title="Students seem to like React"/>
			<NewsList articlesList={data} />
		</section>
	);
};*/