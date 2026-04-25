import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      {/* Navbar que se mantiene fijo */}
      <nav style={{ 
        padding: '20px', 
        background: '#f4ece6', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)' 
      }}>
        <h2 style={{ color: '#8d5524', margin: 0 }}>Artesanías El Rincón</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#5d4037', fontWeight: 'bold' }}>Inicio</Link>
          <Link to="/productos" style={{ textDecoration: 'none', color: '#5d4037', fontWeight: 'bold' }}>Productos</Link>
          <span style={{ cursor: 'pointer' }}>🛒 Carrito</span>
        </div>
      </nav>

      {/* Aquí es donde cambia el contenido */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;