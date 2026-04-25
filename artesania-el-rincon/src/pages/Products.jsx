import React from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';

const articulos = [
  { 
    id: 1, 
    name: "Jarrita de Cerámica Pintada a Mano", 
    price: "45.00", 
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=500&q=80",
    isNew: true 
  },
  { 
    id: 2, 
    name: "Manta de Lana Tejida a Telar", 
    price: "85.00", 
    image: "https://images.unsplash.com/photo-1528813146034-712803b98751?auto=format&fit=crop&w=500&q=80",
    isNew: false 
  },
  { 
    id: 3, 
    name: "Cesta de Mimbre Tejida", 
    price: "30.00", 
    image: "https://images.unsplash.com/photo-1590736961649-7119045ff743?auto=format&fit=crop&w=500&q=80",
    isNew: false 
  },
  { 
    id: 4, 
    name: "Joyería Artesanal Plata", 
    price: "55.00", 
    image: "https://images.unsplash.com/photo-1610664921890-ebad9c087f9c?auto=format&fit=crop&w=500&q=80",
    isNew: true 
  }
];

export default function Products() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#121212' }}>
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />

      {/* Contenedor principal del catálogo */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <h2 style={{ 
          color: '#e0cda9', 
          textAlign: 'center', 
          marginBottom: '40px', 
          fontSize: '2.2rem',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Nuestro Catálogo
        </h2>

        {/* Grid responsivo: ajusta las tarjetas automáticamente */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {articulos.map((art) => (
            <ProductCard 
              key={art.id}
              name={art.name}
              price={art.price}
              image={art.image} 
              isNew={art.isNew}
            />
          ))}
        </div>
      </div>
    </div>
  );
}