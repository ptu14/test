import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState();
    useEffect(() => {
    fetch(`https://scintillating-manatee-558b96.netlify.app/.netlify/functions/api/movies`)
        .then((response) => response.json())
        .then((actualData) => {
          setData(actualData);
        })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacta {data?.movies.map(el => <>{el.title} <img src={el.img} height="278" width="185" alt=""/> </>)}
        </a>
      </header>
    </div>
  );
}

export default App;
