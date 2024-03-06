import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Navbar />

      <hr />

      <Routes>
        {/* Components without props */}
        <Route path="/" element = {<Home />} />
        <Route path="/About" element = {<About />} />
        <Route path="/Projects" element = {<Projects />} />
        {/* Components with props */}
        <Route path="/Contact" element = {<Contact props="phone"/>} />
      </Routes>

    </Router>
  );
}

export default App;
