import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Holberton-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to acces the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2024 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
