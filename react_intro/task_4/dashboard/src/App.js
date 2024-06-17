import logo from './Holberton Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to acces the full dashboard</p>
        <form>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password"></input>
          </div>
          <button type="button">OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
