import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Git-link"
          href="https://github.com/seanquinn917"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my github!
        </a>
        <a
          className="Link-link"
          href="https://www.linkedin.com/in/seanpatrickquin/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Connect with me on LinkedIn
        </a>
        <a
          className="Blog-link"
          href="https://medium.com/@seanquinn917"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my Blog
        </a>
      </header>
    </div>
  );
}

export default App;
