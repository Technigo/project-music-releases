import { createRoot } from "react-dom";
import "./index.css";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

//cheat sheet ersätter rad 5-8
//ReactDOM.render(<App />, document.getElementById('root'))
