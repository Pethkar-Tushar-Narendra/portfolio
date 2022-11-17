import './App.css';
import Particle from './config/Particle';
import Home from './Screens/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Screens/Navbar/Navbar';
import About from './Screens/About/About';
import Portfolio from './Screens/Portfoilio/Portfolio';
import ContactMe from './Screens/ContactMe/ContactMe';

function App() {
  return (
    <>
      <Particle />
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/*<Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contactMe" element={<ContactMe />} /> */}
          </Routes>
        </main>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
