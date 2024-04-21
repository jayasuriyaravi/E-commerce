import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './component/Head';
import Footer from './component/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactForm from './pages/Contact';
import ProductDisplay from './pages/ProductDisplay';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';

function App() {

  const products1 = {
    name:"Sareee",
    img:"./assets/cartIcon.png",
    old_price:"8000",
    new_price:"6000"
  }

  return (
    <>
      {/* adding the routing to all pages */}
      <Router>
        <Head />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ProductDisplay products1={products1}></ProductDisplay>
        <Footer />
      </Router>
    </>
  );
}

export default App;
