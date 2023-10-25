import React from 'react';
import StatusTable from './StatusTable';
import AerodromeImage from './AerodromeImage';
import { initialData } from './statusData';


import './AppContainer.css';

const AppContainer: React.FC = () => {
  return (
    <div className="app-container">
      <StatusTable data={initialData} />
      <AerodromeImage />
    </div>
  );
}

export default AppContainer;
