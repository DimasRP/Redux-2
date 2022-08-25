import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
