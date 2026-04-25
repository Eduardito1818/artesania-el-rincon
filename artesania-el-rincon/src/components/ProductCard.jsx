import { useCart } from '../context/CartContext';

export default function ProductCard({ name, price, image, isNew }) {
  const { addToCart } = useCart();

  return (
    <div style={{ 
      border: '1px solid #444', 
      padding: '20px', 
      borderRadius: '12px', 
      textAlign: 'center', 
      background: '#1a1a1a', 
      color: '#fff',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      position: 'relative'
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {isNew && (
        <span style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          background: '#e0cda9', 
          color: '#1a1a1a', 
          padding: '2px 8px', 
          borderRadius: '4px', 
          fontSize: '0.8rem', 
          fontWeight: 'bold',
          zIndex: 1 
        }}>
          NUEVO
        </span>
      )}

      <div style={{ 
        width: '100%', 
        height: '180px', 
        background: '#333', 
        marginBottom: '15px', 
        borderRadius: '8px', 
        overflow: 'hidden',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        {/* Usamos la imagen fija de prueba para asegurar que cargue */}
        <img 
          src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=500&q=80" 
          alt="Prueba de carga" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{name}</h3>
      <p style={{ color: '#e0cda9', fontWeight: 'bold', fontSize: '1.2rem', margin: '0 0 15px 0' }}>S/. {price}</p>
      
      <button 
        onClick={(e) => {
          e.stopPropagation(); 
          addToCart({ name, price, image });
        }}
        style={{ 
          background: '#a0522d', 
          color: '#fff', 
          border: 'none', 
          padding: '10px 20px', 
          borderRadius: '6px', 
          cursor: 'pointer', 
          width: '100%',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}