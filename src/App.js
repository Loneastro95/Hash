import logo from './logo.svg';
import './App.css';
import NavBar from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Member from './components/Member';
import What from './components/What';
import Key from './components/Key';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Member/>
      <What/>
      <Key/>
    </div>
  );
}

export default App;
