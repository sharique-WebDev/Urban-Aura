import './App.css';
import './Style.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MoreProduct from './Components/MoreProducts'; // Dynamic Product page
import Contact from './Components/Contact';
import Product from './Components/Product';
import ScrollToTop from './Components/ScrollToTop';
import Checkout from './Components/Checkout'
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout/:productId' element={<Checkout />} />
<Route path='/cart' element={<Cart />} />

        {/* Shared Product display with dynamic category */}
        <Route path='/casual' element={<MoreProduct category="casual" bgColor='bg-danger-subtle' />} />
        <Route path='/winter' element={<MoreProduct category="winter" bgColor='bg-success-subtle' />} />
        <Route path='/summer' element={<MoreProduct category="summer" bgColor='bg-warning-subtle' />} />
        <Route path='/kids' element={<MoreProduct category="kids" bgColor='bg-info-subtle' />} />
        <Route path='/indian' element={<MoreProduct category="indian" bgColor='bg-primary-subtle' />} />
        <Route path='/womens' element={<MoreProduct category="womens" bgColor='bg-dark-subtle' />} />
        <Route path='/mens' element={<MoreProduct category="mens" bgColor='bg-secondary-subtle' />} />

        <Route path='/product/:productId' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;