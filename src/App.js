import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Prima lezione di <span className="color">React</span> conclusa!</h1>
        <br />
        <br />
        <h2>Cosa ho studiato oggi:</h2>
        <br />
        <br />
        <div>
        <p>
          Affrontato l'introduzione a React
        </p>
        <hr />
        <p>Compreso la struttura di una repository React</p>
        <hr />
        <p>Installato le estensioni consigliate</p>
        <hr />
        <p>Studiato la sintassi JSX</p>
        </div>
      </header>
    </div>
  );
}

export default App;
