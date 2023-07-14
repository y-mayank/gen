import logo from "./logo.svg";
import "./App.css";

import generateSubs from "./utils/generateSubs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={generateSubs}>click me</button>
      </header>
    </div>
  );
}

export default App;
