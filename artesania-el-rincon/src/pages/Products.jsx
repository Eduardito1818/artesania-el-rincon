import ProductCard from '../components/ProductCard';

const articulos = [
  { id: 1, name: "Jarrita de Cerámica Pintada", price: "45.00", isNew: true },
  { id: 2, name: "Manta de Lana Tejida", price: "85.00", isNew: false },
  { id: 3, name: "Cesta de Mimbre Elegante", price: "30.00", isNew: false },
  { id: 4, name: "Joyería Artesanal Plata", price: "55.00", isNew: true },
];

export default function Products() {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ color: '#e0cda9', textAlign: 'center', marginBottom: '40px' }}>Nuestro Catálogo</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '30px' 
      }}>
        {articulos.map(art => (
          <ProductCard key={art.id} {...art} />
        ))}
      </div>
    </div>
  );
}