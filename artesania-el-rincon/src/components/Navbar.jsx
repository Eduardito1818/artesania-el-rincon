import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav style={{ 
      padding: '15px 50px', 
      background: '#f5f5f5', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ width: '40px', height: '40px', background: '#a0522d', borderRadius: '50%' }}></div>
        <h2 style={{ color: '#5d4037', margin: 0, fontSize: '1.4rem' }}>Artesanías El Rincón</h2>
      </div>
      
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#5d4037', fontWeight: '600' }}>Inicio</Link>
        <Link to="/productos" style={{ textDecoration: 'none', color: '#5d4037', fontWeight: '600', borderBottom: '2px solid #a0522d' }}>Productos</Link>
        <Link to="/carrito" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ fontSize: '1.2rem' }}>🛒</span>
          <span style={{ background: '#5d4037', color: '#fff', borderRadius: '50%', padding: '2px 8px', fontSize: '0.8rem' }}>{cartCount}</span>
          <span style={{ fontWeight: '600' }}>Mi Carrito</span>
        </Link>
        <button style={{ background: '#a0522d', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Pagar</button>
      </div>
    </nav>
  );
}