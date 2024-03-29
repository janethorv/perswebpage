import './css/App.scss';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CV from './pages/CV'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
