import React, { useState } from 'react';
import StatusTable from './Status/StatusTable';
import StatusForm from './Status/StatusForm';
import AerodromeImage from './Status/AerodromeImage';
import { initialData } from './Status/StatusData';
import './AppContainer.css';

const AppContainer: React.FC = () => {
  // Mock state for user authentication. In a real application,
  // this state would be set based on the authentication system.
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="app-container">
      {isLoggedIn ? <StatusForm /> : <StatusTable data={initialData} />}
      <AerodromeImage />
    </div>
  );
}

export default AppContainer;
