import React from 'react';
import './NavBar.css'; // Import the CSS file

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center"> 
          <img src="src\assets\atc.ico" alt="logo" height="40" width="40" style={{ marginRight: '20px' }} />
          <span className="navbar-title-text">Aerodrome Status</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
