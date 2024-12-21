import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AddCommande.css'; 

function ModifierCommande() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateDebut: '',
  });

  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch the current data for modification (use your API for real data)
    const currentData = {
      nom: 'John',
      prenom: 'Doe',
      email: 'john.doe@example.com',
      telephone: '123456789',
      dateDebut: '2024-01-01',
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

   
    navigate('/Dashboard-commande'); 
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cette commande ?');
    
    if (confirmDelete) {
      console.log('Commande deleted');
      
    
      
    
      navigate('/Dashboard-commande'); 
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
            <p>Admin Commande</p>
          </div>
        </div>

        <div className="pContent">
          <button>Commande</button>
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
          <h2>Modifier Commande</h2>
          <form className="add-commande-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="prenom">Prénom</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Prénom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone">Téléphone</label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Téléphone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateDebut">Date début contact</label>
              <input
                type="date"
                id="dateDebut"
                name="dateDebut"
                value={formData.dateDebut}
                onChange={handleChange}
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
              Supprimer Commande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModifierCommande;
