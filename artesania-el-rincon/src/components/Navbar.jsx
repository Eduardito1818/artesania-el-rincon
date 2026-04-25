import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  // La lógica SIEMPRE dentro de la función del componente
  const { cartCount } = useCart();

  return (
    <nav style={{ 
      padding: '20px 40px', 
      background: '#2d2d2d', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '1px solid #444'
    }}>
      <h2 style={{ color: '#e0cda9', margin: 0 }}>Artesanías El Rincón</h2>
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontWeight: '500' }}>Inicio</Link>
        <Link to="/productos" style={{ textDecoration: 'none', color: '#fff', fontWeight: '500' }}>Productos</Link>
        
        {/* Aquí mostramos el contador real */}
        
      <Link to="/carrito" style={{ textDecoration: 'none', color: '#e0cda9', fontWeight: 'bold' }}>
        🛒 Carrito ({cartCount})
       </Link>
      </div>
    </nav>
  );
}