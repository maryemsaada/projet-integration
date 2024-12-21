import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AddProduit'; 

function ModifierProduit() {
  const [formData, setFormData] = useState({
    nomdeproduit: '',
    quantite: '',
   
  });

  const navigate = useNavigate(); 

  useEffect(() => {
   
    const currentData = {
      nomdeproduit: 'pc',
      quantite: '500',
     
    };
    setFormData(currentData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/Dashboard-stock'); 
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?');
    
    if (confirmDelete) {
      console.log('produit deleted');
      navigate('/Dashboard-stock'); 
    } else {
      console.log('Deletion canceled');
    }
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
            <p>Admin stock</p>
          </div>
        </div>

        <div className="pContent">
          <button>Stock</button>
        </div>
      </div>

      <div className="m">
        <div className="woiu">
          <h4>My Profile</h4>
          <h4
            style={{ paddingLeft: '2em', paddingRight: '2em' }}
            onClick={() => navigate('/')} 
          >
            Log Out
          </h4>
        </div>

        <div className="add-commande-container">
          <h2>Modifier Produit</h2>
          <form className="add-commande-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom">Nom de produit</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nomdeproduit}
                onChange={handleChange}
                placeholder="Nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="prenom">Quantité</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.quantite}
                onChange={handleChange}
                placeholder="Prénom"
              />
            </div>

            
            <button type="submit" className="submit-btn">
              Modifier
            </button>
            <button
              type="button"
              className="delete-btn"
              onClick={handleDelete} 
            >
              Supprimer produit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModifierProduit;
