import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import AddProductForm from '../components/AddProductForm';

// URLs actualizadas para evitar cuadros grises
const iniciales = [
  { id: 1, name: "Jarrita de Cerámica Pintada a Mano", price: 45.00, image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500", category: "Cerámica", material: "Cerámica", isNew: true },
  { id: 2, name: "Manta de Lana Tejida a Telar", price: 85.00, image: "https://images.unsplash.com/photo-1606132473219-026040f7f329?w=500", category: "Textiles", material: "Lana", isNew: false },
  { id: 3, name: "Cesta de Mimbre Tejida", price: 30.00, image: "https://images.unsplash.com/photo-1590736961649-7119045ff743?w=500", category: "Cestería", material: "Mimbre", isNew: false },
  { id: 4, name: "Joyería Artesanal Plata", price: 55.00, image: "https://images.unsplash.com/photo-1610664921890-ebad9c087f9c?w=500", category: "Joyería Artesanal", material: "Plata", isNew: true }
];

export default function Products() {
  // 1. INICIALIZACIÓN CON SEGURIDAD (Try-Catch)
  const [articulos, setArticulos] = useState(() => {
    try {
      const datosGuardados = localStorage.getItem('rincon_artesano_db');
      return datosGuardados ? JSON.parse(datosGuardados) : iniciales;
    } catch (error) {
      console.error("Error cargando localStorage, usando iniciales:", error);
      return iniciales; // Si falla el guardado, la app sigue funcionando
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [maxPrice, setMaxPrice] = useState(1300);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // 2. PERSISTENCIA
  useEffect(() => {
    localStorage.setItem('rincon_artesano_db', JSON.stringify(articulos));
  }, [articulos]);

  const agregarProducto = (nuevo) => {
    // Usamos el spread operator para mantener la inmutabilidad del estado
    setArticulos([...articulos, { ...nuevo, id: Date.now() }]);
  };

  // 3. FILTRADO (Lógica de negocio)
  const filteredProducts = articulos.filter(product => {
    const matchCategory = activeCategory === 'Todas' || product.category === activeCategory;
    const matchPrice = product.price <= maxPrice;
    const matchMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
    return matchCategory && matchPrice && matchMaterial;
  });

  const handleMaterialChange = (material) => {
    setSelectedMaterials(prev => 
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    );
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#121212' }}>
      <Sidebar 
        onCategorySelect={setActiveCategory}
        activeCategory={activeCategory}
        onPriceChange={setMaxPrice}
        currentPrice={maxPrice}
        onMaterialChange={handleMaterialChange}
        selectedMaterials={selectedMaterials}
      />

      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: '#e0cda9', marginBottom: '20px', fontSize: '2.2rem' }}>
            {activeCategory === 'Todas' ? 'Nuestro Catálogo' : activeCategory}
          </h2>
          <button onClick={() => setShowForm(true)} style={btnAdminStyle}>
            + Gestionar Inventario
          </button>
        </header>

        {showForm && (
          <AddProductForm onAddProduct={agregarProducto} onClose={() => setShowForm(false)} />
        )}

        <main style={gridStyle}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((art) => <ProductCard key={art.id} {...art} />)
          ) : (
            <div style={{ color: '#777', textAlign: 'center', gridColumn: '1 / -1', padding: '50px' }}>
              <h3>No hay artesanías que coincidan con los filtros.</h3>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

const btnAdminStyle = {
  background: '#a0522d', color: '#fff', padding: '12px 24px', 
  borderRadius: '8px', cursor: 'pointer', border: 'none', fontWeight: 'bold',
  transition: '0.3s'
};

const gridStyle = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
  gap: '30px', maxWidth: '1200px', margin: '0 auto'
};