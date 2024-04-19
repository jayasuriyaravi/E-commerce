import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './component/Head';
import Footer from './component/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactForm from './pages/Contact';

function App() {
  return (
    <>
    {/* adding the routing to the all pages */}
      <Router>
        <Head />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;