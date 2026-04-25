import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';

const articulos = [
  { id: 1, name: "Jarrita de Cerámica Pintada a Mano", price: "45.00", isNew: true },
  { id: 2, name: "Manta de Lana Tejida a Telar", price: "45.00", isNew: false },
  { id: 3, name: "Cesta de Mimbre Tejida", price: "45.00", isNew: false },
  { id: 4, name: "Jarrita de Cerámica", price: "45.00", isNew: true },
];

export default function Products() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#121212' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px' }}>
        <h1 style={{ color: '#e0cda9', marginBottom: '30px', textAlign: 'center' }}>Nuestro Catálogo</h1>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '25px' 
        }}>
          {articulos.map(art => (
            <ProductCard key={art.id} {...art} />
          ))}
        </div>
      </div>
    </div>
  );
}