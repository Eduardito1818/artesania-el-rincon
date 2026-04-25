import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '20px 40px', 
      background: '#2d2d2d', // Fondo oscuro como tu captura
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '1px solid #444'
    }}>
      <h2 style={{ color: '#e0cda9', margin: 0 }}>Artesanías El Rincón</h2>
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: '500' }}>Inicio</Link>
        <Link to="/productos" style={{ textDecoration: 'none', color: '#fff', fontWeight: '500' }}>Productos</Link>
        <span style={{ cursor: 'pointer', color: '#e0cda9', fontSize: '1.2rem' }}>🛒 Carrito</span>
      </div>
    </nav>
  );
}