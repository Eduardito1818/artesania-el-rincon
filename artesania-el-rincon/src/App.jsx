import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart'; // Añade este import arriba




function App() {
  return (
    <Router>
      <Navbar /> {/* El menú se mantiene siempre visible */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;