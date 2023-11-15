import React from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../LoginContext';
import './NavBar.css'; // Import the CSS file

const NavBar: React.FC = () => {

  // Mock state for user authentication. In a real application,
  // this state would be set based on the authentication system.
  const {toggleLogin} = useLogin();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center"> 
          <img src="src\assets\atc.ico" alt="logo" height="40" width="40" style={{ marginRight: '20px' }} />
          <span className="navbar-title-text">Aerodrome Status</span>
        </div>
        <div>
          <Link to="/" className="btn btn-secondary m-2">Status Table</Link>
          <Link to="/about" className="btn btn-primary m-2">About</Link>
          
          {/* Mock button to toggle the isLoggedIn state for demonstration purposes */}
          <button onClick={() => toggleLogin()}>Toggle Login State</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
