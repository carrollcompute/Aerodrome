import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center"> 
          <img src="src\assets\atc.ico" alt="logo" height="40" width="40" style={{ marginRight: '20px' }} />
          <span className="navbar-title-text">Aerodrome Status</span>
        </div>
        <div>
          <Link to="/form" className="btn btn-primary m-2">Status Form</Link>
          <Link to="/" className="btn btn-secondary m-2">Status Table</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
