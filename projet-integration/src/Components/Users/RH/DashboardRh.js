import React, { useState } from 'react';
import './DashboardRh.css';
import User from './user.png'
import {Button} from "react-bootstrap"
function DashboardRh() {
 

  return (
    <div>

        <div className= "wiou"> 

            <div className ="p">
                <div className ="pContent">
                <button>Fournisseur</button>
                <button>Employé</button>
                </div>
            
            </div>

            <div className = "m">
                <div className ="woiu">
                <h4>
                my profile
                </h4>

                <h4 style={{paddingLeft: '2em' , paddingRight: '2em'}}>
                    logout
                </h4>

                
            </div>
    </div>
        </div>
        {/*  <div className="dashboard-container">
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
        </button>
        <nav className="sidebar-nav">
        <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
        </ul>
        </nav>
    </div>

    <div className="dashboard-content">
        <h1>Welcome to the RH Dashboard</h1>
    
    </div>
    </div> */}

    </div>
);
}

export default DashboardRh;
