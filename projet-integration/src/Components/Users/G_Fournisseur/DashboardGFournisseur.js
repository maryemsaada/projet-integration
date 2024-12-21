import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './DashboardGFournisseur.css';

function DashboardGFournisseur() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('http://your-api-endpoint/commandes') // Replace with your API URL
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleAjouterClick = () => {
    navigate('/add-Fournisseur'); 
  };

  const handleModifierClick = (id) => {
    console.log(`Navigating to /Modifier-fournisseur/${id}`); // Debugging log
    navigate(`/Modifier-fournisseur/${id}`); 
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
            <p>Admin fournisseur</p>
          </div>
        </div>

        <div className="pContent">
          <button>Fournisseur</button>
        </div>
      </div>

      <div className="m">
        <div className="woiu">
          <h4>my profile</h4>
          <h4 style={{ paddingLeft: '2em', paddingRight: '2em' }}>logout</h4>
        </div>

        <div className="table-container">
          <div className="table-actions">
            <button className="add-btn" onClick={handleAjouterClick}>
              Ajouter
            </button>
            <input
              type="text"
              placeholder="rechercher un fournisseur"
              className="search-input"
            />
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nom </th>
                  <th>Prénom</th>
                  <th>Email</th>
                  <th>Date Début</th>
                  <th>Date Fin</th>
                  <th>Numéro</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Static row (add an id for static rows as well if needed) */}
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>johndoe@example.com</td>
                  <td>2023-01-01</td>
                  <td>2023-12-31</td>
                  <td>123456789</td>
                  <td>Admin</td>
                  <td>
                    <span className="arrow" onClick={() => handleModifierClick(1)}>
                      &#8594;
                    </span>
                  </td>
                </tr>
                
                {/* Static row with another set of data */}
                <tr>
                  <td>Jane</td>
                  <td>Smith</td>
                  <td>janesmith@example.com</td>
                  <td>2023-02-01</td>
                  <td>2024-02-01</td>
                  <td>987654321</td>
                  <td>User</td>
                  <td>
                    <span className="arrow" onClick={() => handleModifierClick(2)}>
                      &#8594;
                    </span>
                  </td>
                </tr>

                {/* Dynamically fetched rows */}
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.nom}</td>
                    <td>{row.prenom}</td>
                    <td>{row.email}</td>
                    <td>{row.datedebut}</td>
                    <td>{row.datefin}</td>
                    <td>{row.numero}</td>
                    <td>{row.role}</td>
                    <td>
                      <span
                        className="arrow"
                        onClick={() => handleModifierClick(row.id)} // Assuming each row has a unique 'id'
                      >
                        &#8594;
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardGFournisseur;
