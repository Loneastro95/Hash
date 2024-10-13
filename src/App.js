import logo from './logo.svg';
import './App.css';
import NavBar from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Member from './components/Member';
import What from './components/What';
import Key from './components/Key';
import Digital from './components/Digital';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Member/>
      <What/>
      <Key/>
      <Digital/>
    </div>
  );
}

export default App;
