import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>API Key: {process.env.REACT_APP_API_KEY}</h1>
      <p>API URL: {process.env.REACT_APP_API_URL}</p>
    </div>
  );
}

export default App;
