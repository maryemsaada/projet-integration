import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './DashboardGTranche.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function DashboardGTranche() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('http://your-api-endpoint/tranches') // Replace with your API URL
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
    navigate('/add-commande'); 
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
          <button>Commande</button>
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
              placeholder="rechercher une Commande"
              className="search-input"
            />
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nom fournisseur</th>
                  <th>Quantité tranche 1</th>
                  <th>Date tranche 1</th>
                  <th>Quantité tranche 2</th>
                  <th>Date tranche 2</th>
                  <th>Quantité tranche 3</th>
                  <th>Date tranche 3</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.fournisseur}</td>
                    <td>{row.quantiteTranche1}</td>
                    <td>{row.dateTranche1}</td>
                    <td>{row.quantiteTranche2}</td>
                    <td>{row.dateTranche2}</td>
                    <td>{row.quantiteTranche3}</td>
                    <td>{row.dateTranche3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Timeline for Tranche 1 */}
        <div className="timeline-container">
          <h2>Timeline for Tranche 1</h2>
          <Timeline>
            {data.map((row, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{`Quantité: ${row.quantiteTranche1} | Date: ${row.dateTranche1}`}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        {/* Timeline for Tranche 2 */}
        <div className="timeline-container">
          <h2>Timeline for Tranche 2</h2>
          <Timeline>
            {data.map((row, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{`Quantité: ${row.quantiteTranche2} | Date: ${row.dateTranche2}`}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        {/* Timeline for Tranche 3 */}
        <div className="timeline-container">
          <h2>Timeline for Tranche 3</h2>
          <Timeline>
            {data.map((row, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>{`Quantité: ${row.quantiteTranche3} | Date: ${row.dateTranche3}`}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default DashboardGTranche;
