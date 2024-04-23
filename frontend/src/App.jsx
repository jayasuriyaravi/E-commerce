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
import Cart from './pages/Cart';
import { CartProvider } from './component/CartContext';

function App() {
  return (
    <>
      <Router>
        <Head />
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:id" element={<ProductDisplay />} />
            <Route path="/product/:category" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
