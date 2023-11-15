import React from 'react';
import StatusTable from './Status/StatusTable';
import StatusForm from './Status/StatusForm';
import AerodromeImage from './Status/AerodromeImage';
import { initialData } from './Status/StatusData';
import { useLogin } from './LoginContext';
import './AppContainer.css';

const AppContainer: React.FC = () => {
  
  const { isLoggedIn } = useLogin();

  return (
    <div className="app-container">
      {isLoggedIn ? <StatusForm /> : <StatusTable data={initialData} />}
      <AerodromeImage />
    </div>
  );
}

export default AppContainer;
