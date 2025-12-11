import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <hr />

      <Routes>
        {/* Components without props */}
        <Route path="/" element = {<Home />} />
        {/* Components with props */}
        {/* <Route path="/Contact" element = {<Contact props="phone"/>} /> */}
      </Routes>

    </Router>
  );
}

export default App;
