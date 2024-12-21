import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardGStock.css';

function DashboardGStock() {
  const [data, setData] = useState([
    { Nomprod: 'pc', quantite: '10', id: '1' }, // Added `id` for each product
  ]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://your-api-endpoint/commandes') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((result) => {
        setData((prevData) => [...prevData, ...result]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleAjouterClick = () => {
    navigate('/add-produit'); // Navigate to Add Product page
  };

  const handleModifierClick = (productId) => {
    console.log('Modify Product with ID:', productId);
    navigate(`/Modifier-produit/${productId}`); // Navigate to Modifier-produit with product ID
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
              placeholder="Rechercher un produit"
              className="search-input"
            />
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nom de produit</th>
                  <th>Quantité</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.Nomprod}</td>
                    <td>{row.quantite}</td>
                    <td>
                      <span
                        className="arrow"
                        onClick={() => handleModifierClick(row.id)} // Pass the `id` of the product
                      >
                        &#8594; {/* Right arrow symbol */}
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

export default DashboardGStock;
