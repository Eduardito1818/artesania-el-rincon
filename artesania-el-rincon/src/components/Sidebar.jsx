export default function Sidebar() {
  const categorias = ["Cerámica", "Textiles", "Cestería", "Joyería Artesanal"];
  const materiales = ["Lana", "Cerámica", "Mimbre", "Plata"];

  return (
    <aside style={{ width: '250px', padding: '20px', borderRight: '1px solid #333', color: '#fff', background: '#121212' }}>
      <h3 style={{ color: '#e0cda9', marginBottom: '15px' }}>Categorías</h3>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
        {categorias.map(cat => (
          <li key={cat} style={{ padding: '8px 0', cursor: 'pointer', borderBottom: '1px solid #222' }}>{cat}</li>
        ))}
      </ul>

      <h3 style={{ color: '#e0cda9', marginBottom: '15px' }}>Filtros</h3>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Rango de Precio</p>
        <input type="range" style={{ width: '100%', accentColor: '#a0522d' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
          <span>S/. 45.00</span>
          <span>S/. 1300.00</span>
        </div>
      </div>

      <h3 style={{ color: '#e0cda9', marginBottom: '15px' }}>Material</h3>
      {materiales.map(mat => (
        <div key={mat} style={{ marginBottom: '8px' }}>
          <input type="checkbox" id={mat} />
          <label htmlFor={mat} style={{ marginLeft: '10px', fontSize: '0.9rem' }}>{mat}</label>
        </div>
      ))}
    </aside>
  );
}