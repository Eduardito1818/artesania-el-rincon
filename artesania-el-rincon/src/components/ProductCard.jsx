export default function ProductCard({ name, price, isNew }) {
  return (
    <div style={{ 
      border: '1px solid #444', 
      padding: '20px', 
      borderRadius: '12px', 
      textAlign: 'center', 
      background: '#1a1a1a', // Fondo muy oscuro para el card
      color: '#fff',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      position: 'relative'
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {isNew && <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#e0cda9', color: '#1a1a1a', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>NUEVO</span>}
      <div style={{ width: '100%', height: '180px', background: '#333', marginBottom: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#777' }}>
        Imagen
      </div>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{name}</h3>
      <p style={{ color: '#e0cda9', fontWeight: 'bold', fontSize: '1.2rem', margin: '0 0 15px 0' }}>S/. {price}</p>
      <button style={{ 
        background: '#a0522d', // Tono terracota como la imagen original
        color: '#fff', 
        border: 'none', 
        padding: '10px 20px', 
        borderRadius: '6px', 
        cursor: 'pointer', 
        width: '100%',
        fontWeight: 'bold',
        fontSize: '1rem'
      }}>
        Agregar al Carrito
      </button>
    </div>
  );
}