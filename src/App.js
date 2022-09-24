import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <small>
        <a href="" target="_blank" rel="noopener noreferrer">
          Open-source code
        </a>
        , by Oksana Zhuravska
      </small>
    </div>
  );
}
export default App;
