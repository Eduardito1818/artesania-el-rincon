import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart } = useCart();
  
  // Calcular el total sumando los precios (convertidos a número)
  const total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#e0cda9', marginBottom: '30px' }}>Tu Carrito</h1>
      
      {cart.length === 0 ? (
        <p>No hay artesanías en el carrito todavía.</p>
      ) : (
        <>
          <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '12px', border: '1px solid #444' }}>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #333' }}>
                <span>{item.name}</span>
                <span style={{ fontWeight: 'bold' }}>S/. {item.price}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '1.5rem', color: '#e0cda9' }}>
              <strong>Total:</strong>
              <strong>S/. {total.toFixed(2)}</strong>
            </div>
          </div>
          <button style={{ 
            marginTop: '30px', background: '#a0522d', color: '#fff', border: 'none', 
            padding: '15px 30px', borderRadius: '8px', cursor: 'pointer', width: '100%', fontWeight: 'bold' 
          }}>
            Confirmar Pedido de Artesanías
          </button>
        </>
      )}
    </div>
  );
}