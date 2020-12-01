import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mike and Connor's Web App. Coming Soon...
        </p>
        <a
          className="App-link"
          href="https://github.com/connor-ruff/MikeAndConnor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Our Repo
        </a>
      </header>
    </div>
  );
}

export default App;
