import React, { useState, useEffect } from 'react'; // Agregamos useEffect
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import AddProductForm from '../components/AddProductForm';

const iniciales = [
  { id: 1, name: "Jarrita de Cerámica Pintada a Mano", price: 45.00, image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=500&q=80", category: "Cerámica", material: "Cerámica", isNew: true },
  { id: 2, name: "Manta de Lana Tejida a Telar", price: 85.00, image: "https://images.unsplash.com/photo-1528813146034-712803b98751?auto=format&fit=crop&w=500&q=80", category: "Textiles", material: "Lana", isNew: false },
  { id: 3, name: "Cesta de Mimbre Tejida", price: 30.00, image: "https://images.unsplash.com/photo-1590736961649-7119045ff743?auto=format&fit=crop&w=500&q=80", category: "Cestería", material: "Mimbre", isNew: false },
  { id: 4, name: "Joyería Artesanal Plata", price: 55.00, image: "https://images.unsplash.com/photo-1610664921890-ebad9c087f9c?auto=format&fit=crop&w=500&q=80", category: "Joyería Artesanal", material: "Plata", isNew: true }
];

export default function Products() {
  // 1. INICIALIZACIÓN: Intentamos cargar lo que hay en localStorage
  const [articulos, setArticulos] = useState(() => {
    const datosGuardados = localStorage.getItem('rincon_artesano_db');
    return datosGuardados ? JSON.parse(datosGuardados) : iniciales;
  });

  const [showForm, setShowForm] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [maxPrice, setMaxPrice] = useState(1300);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // 2. PERSISTENCIA: Cada vez que el array 'articulos' cambie, guardamos en el navegador
  useEffect(() => {
    localStorage.setItem('rincon_artesano_db', JSON.stringify(articulos));
  }, [articulos]);

  const agregarProducto = (nuevo) => {
    setArticulos([...articulos, { ...nuevo, id: Date.now(), material: nuevo.material || "Otros" }]);
  };

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
        <h2 style={{ color: '#e0cda9', textAlign: 'center', marginBottom: '20px', fontSize: '2.2rem' }}>
          {activeCategory === 'Todas' ? 'Nuestro Catálogo' : activeCategory}
        </h2>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button onClick={() => setShowForm(true)} style={btnAdminStyle}>
            + Gestionar Inventario
          </button>
        </div>

        {showForm && (
          <AddProductForm onAddProduct={agregarProducto} onClose={() => setShowForm(false)} />
        )}

        <div style={gridStyle}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((art) => <ProductCard key={art.id} {...art} />)
          ) : (
            <div style={{ color: '#777', textAlign: 'center', gridColumn: '1 / -1', padding: '50px' }}>
              <h3>No hay artesanías que coincidan con los filtros.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const btnAdminStyle = {
  background: '#a0522d', color: '#fff', padding: '12px 24px', 
  borderRadius: '8px', cursor: 'pointer', border: 'none', fontWeight: 'bold'
};

const gridStyle = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
  gap: '30px', maxWidth: '1200px', margin: '0 auto'
};