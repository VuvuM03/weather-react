import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        <a href="https://github.com/VuvuM03/weather-react">Open-source code</a>,
        by Vuvu M, hosted on
        <a
          href="https://courageous-daffodil-72d1bf.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
