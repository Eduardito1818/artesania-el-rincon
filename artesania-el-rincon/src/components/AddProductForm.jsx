import React, { useState } from 'react';

export default function AddProductForm({ onAddProduct, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Cerámica',
    material: 'Cerámica', // Agregamos material por defecto
    image: '',
    isNew: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica de ingeniería
    if (!formData.name || !formData.price || !formData.image) {
      return alert("Por favor, completa todos los campos, incluyendo la imagen.");
    }

    onAddProduct({
      ...formData,
      price: parseFloat(formData.price),
      // Si el usuario no elige material, usamos la categoría como respaldo
      material: formData.material || formData.category 
    });
    
    onClose();
  };

  return (
    <div style={overlayStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ color: '#e0cda9', marginBottom: '20px', textAlign: 'center' }}>Nuevo Producto</h2>
        
        <label style={labelStyle}>Nombre de la Artesanía</label>
        <input type="text" placeholder="Ej. Manta de alpaca" style={inputStyle} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} />

        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Precio (S/.)</label>
            <input type="number" placeholder="0.00" style={inputStyle} 
              onChange={(e) => setFormData({...formData, price: e.target.value})} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Categoría</label>
            <select style={inputStyle} onChange={(e) => setFormData({...formData, category: e.target.value})}>
              <option value="Cerámica">Cerámica</option>
              <option value="Textiles">Textiles</option>
              <option value="Cestería">Cestería</option>
              <option value="Joyería Artesanal">Joyería Artesanal</option>
            </select>
          </div>
        </div>

        {/* ¡IMPORTANTE! Nuevo campo de Material para que tus filtros funcionen */}
        <label style={labelStyle}>Material Principal</label>
        <select style={inputStyle} onChange={(e) => setFormData({...formData, material: e.target.value})}>
          <option value="Cerámica">Cerámica</option>
          <option value="Lana">Lana</option>
          <option value="Mimbre">Mimbre</option>
          <option value="Plata">Plata</option>
          <option value="Otros">Otros</option>
        </select>

        <label style={labelStyle}>URL de la Imagen (Link directo)</label>
        <input type="text" 
          placeholder="https://images.unsplash.com/..." 
          style={inputStyle} 
          onChange={(e) => setFormData({...formData, image: e.target.value})} 
        />
        <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '-10px' }}>
          Asegúrate de que el link termine en .jpg o .png para que se vea bien.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button type="submit" style={{ ...btnStyle, background: '#a0522d' }}>Guardar Producto</button>
          <button type="button" onClick={onClose} style={{ ...btnStyle, background: '#444' }}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

// Estilos limpios
const overlayStyle = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  background: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', 
  alignItems: 'center', zIndex: 1000
};

const formStyle = {
  background: '#1a1a1a', padding: '30px', borderRadius: '15px',
  border: '1px solid #e0cda9', width: '450px', color: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
};

const labelStyle = { display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#ccc' };

const inputStyle = {
  width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px',
  border: '1px solid #333', background: '#222', color: '#fff', outline: 'none'
};

const btnStyle = {
  flex: 1, padding: '12px', border: 'none', borderRadius: '5px', 
  color: '#fff', fontWeight: 'bold', cursor: 'pointer'
};