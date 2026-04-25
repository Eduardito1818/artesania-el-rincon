export default function Sidebar({ 
  onCategorySelect, 
  activeCategory, 
  onPriceChange, 
  currentPrice, 
  onMaterialChange, 
  selectedMaterials 
}) {
  const categorias = ["Todas", "Cerámica", "Textiles", "Cestería", "Joyería Artesanal"];
  const materiales = ["Lana", "Cerámica", "Mimbre", "Plata"];

  return (
    <aside style={{ 
      width: '250px', 
      padding: '20px', 
      borderRight: '1px solid #333', 
      color: '#fff', 
      background: '#121212',
      height: '100vh',
      position: 'sticky',
      top: 0
    }}>
      {/* Sección de Categorías */}
      <h3 style={{ color: '#e0cda9', marginBottom: '15px', fontSize: '1.2rem' }}>Categorías</h3>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
        {categorias.map(cat => (
          <li 
            key={cat} 
            onClick={() => onCategorySelect(cat)}
            style={{ 
              padding: '10px 0', 
              cursor: 'pointer', 
              borderBottom: '1px solid #222',
              color: activeCategory === cat ? '#e0cda9' : '#fff',
              fontWeight: activeCategory === cat ? 'bold' : 'normal',
              transition: '0.2s'
            }}
          >
            {cat}
          </li>
        ))}
      </ul>

      {/* Sección de Filtros de Precio */}
      <h3 style={{ color: '#e0cda9', marginBottom: '15px', fontSize: '1.2rem' }}>Filtros</h3>
      <div style={{ marginBottom: '30px' }}>
        <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
          Precio Máximo: <span style={{ color: '#e0cda9' }}>S/. {currentPrice}</span>
        </p>
        <input 
          type="range" 
          min="30" 
          max="1300" 
          value={currentPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#a0522d', cursor: 'pointer' }} 
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#777' }}>
          <span>S/. 30.00</span>
          <span>S/. 1300.00</span>
        </div>
      </div>

      {/* Sección de Materiales */}
      <h3 style={{ color: '#e0cda9', marginBottom: '15px', fontSize: '1.2rem' }}>Material</h3>
      {materiales.map(mat => (
        <div key={mat} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
          <input 
            type="checkbox" 
            id={mat} 
            checked={selectedMaterials.includes(mat)}
            onChange={() => onMaterialChange(mat)}
            style={{ cursor: 'pointer', width: '16px', height: '16px', accentColor: '#a0522d' }}
          />
          <label 
            htmlFor={mat} 
            style={{ 
              marginLeft: '10px', 
              fontSize: '0.9rem', 
              cursor: 'pointer',
              color: selectedMaterials.includes(mat) ? '#e0cda9' : '#fff'
            }}
          >
            {mat}
          </label>
        </div>
      ))}
    </aside>
  );
}