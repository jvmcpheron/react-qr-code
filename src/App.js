import './App.css';
import Bootstrap from './components/Bootstrap.js'
import Qr from './components/Qr-Card.js'

function App() {
  return (
    <div className="App container-fluid d-flex align-middle justify-content-center">
    <Qr />
    <Bootstrap />
    </div>
  );
}

export default App;
