import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      ...Home
      ...About
      ...Contact
    </Router>
  );
}

export default App;
