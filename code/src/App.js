import data from './data.json';
import { Albums } from "./components/Albums"

console.log(data);

export const App = () => {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <h1 className="title">New albums & singles</h1>
      <div className="albums-wrapper">
        {/*Here we're passing albums array into the Albums component.*/}
        <Albums data={data.albums.items}/>
      </div>
      </div>
    </div>
  );
}
