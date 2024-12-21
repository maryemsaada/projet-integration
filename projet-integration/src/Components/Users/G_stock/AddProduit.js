import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduit.css';

function AddProduit() {
  const [formData, setFormData] = useState({
    nomdeproduit: '',
    quantite: '',
      
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    navigate('/Dashboard-stock');
  };

  return (
    <div className="wiou">
      <div className="p">
        <div className="profile-section">
          <img
            src={`${process.env.PUBLIC_URL}/wiou.png`}
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-info">
            <h4>Jhon Doe</h4>
            <p>Admin Stock</p>
          </div>
        </div>

        <div className="pContent">
          <button>Stock</button>
        </div>
      </div>

      <div className="m">
        <div className="woiu">
          <h4>My Profile</h4>
          <h4 style={{ paddingLeft: '2em', paddingRight: '2em' }} onClick={() => navigate('/')}>
            Log Out
          </h4>
        </div>

        <div className="add-commande-container">
          <h2>Ajouter un produit</h2>
          <form onSubmit={handleSubmit} className="add-commande-form">
            <div className="form-group">
              <label>Nom de produit</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Quantité</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="submit-btn">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduit;
