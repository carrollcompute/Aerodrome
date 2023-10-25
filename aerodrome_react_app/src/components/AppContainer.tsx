import React, { useState } from 'react';
import StatusTable from './StatusTable';
import StatusForm from './StatusForm';
import AerodromeImage from './AerodromeImage';
import { initialData } from './StatusData';
import './AppContainer.css';

const AppContainer: React.FC = () => {
  // Mock state for user authentication. In a real application,
  // this state would be set based on the authentication system.
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="app-container">
      {isLoggedIn ? <StatusForm /> : <StatusTable data={initialData} />}
      <AerodromeImage />
      {/* Mock button to toggle the isLoggedIn state for demonstration purposes */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
    </div>
  );
}

export default AppContainer;
