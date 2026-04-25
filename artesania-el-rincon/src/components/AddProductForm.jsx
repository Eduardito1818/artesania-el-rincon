import React, { useState } from 'react';

export default function AddProductForm({ onAddProduct, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Cerámica',
    image: '',
    isNew: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return alert("Por favor, llena los campos básicos.");

    // Enviamos el nuevo producto al "Cerebro" (Products.jsx)
    onAddProduct({
      ...formData,
      price: parseFloat(formData.price)
    });
    
    onClose(); // Cerramos el formulario al terminar
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', 
      alignItems: 'center', zIndex: 1000
    }}>
      <form onSubmit={handleSubmit} style={{
        background: '#1a1a1a', padding: '30px', borderRadius: '15px',
        border: '1px solid #e0cda9', width: '400px', color: '#fff'
      }}>
        <h2 style={{ color: '#e0cda9', marginBottom: '20px', textAlign: 'center' }}>Nuevo Producto</h2>
        
        <label style={{ display: 'block', marginBottom: '10px' }}>Nombre de la Artesanía</label>
        <input type="text" placeholder="Ej. Torito de Pucará" 
          style={inputStyle} onChange={(e) => setFormData({...formData, name: e.target.value})} />

        <label style={{ display: 'block', marginBottom: '10px' }}>Precio (S/.)</label>
        <input type="number" placeholder="0.00" 
          style={inputStyle} onChange={(e) => setFormData({...formData, price: e.target.value})} />

        <label style={{ display: 'block', marginBottom: '10px' }}>Categoría</label>
        <select style={inputStyle} onChange={(e) => setFormData({...formData, category: e.target.value})}>
          <option value="Cerámica">Cerámica</option>
          <option value="Textiles">Textiles</option>
          <option value="Cestería">Cestería</option>
          <option value="Joyería Artesanal">Joyería Artesanal</option>
        </select>

        <label style={{ display: 'block', marginBottom: '10px' }}>URL de la Imagen</label>
        <input type="text" placeholder="https://..." 
          style={inputStyle} onChange={(e) => setFormData({...formData, image: e.target.value})} />

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button type="submit" style={{ ...btnStyle, background: '#a0522d' }}>Guardar Producto</button>
          <button type="button" onClick={onClose} style={{ ...btnStyle, background: '#444' }}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px',
  border: '1px solid #333', background: '#222', color: '#fff', outline: 'none'
};

const btnStyle = {
  flex: 1, padding: '12px', border: 'none', borderRadius: '5px', 
  color: '#fff', fontWeight: 'bold', cursor: 'pointer'
};