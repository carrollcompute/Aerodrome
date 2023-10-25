import React from 'react';
import StatusForm from './StatusForm';
import AerodromeImage from './AerodromeImage';

import './AppContainer.css';

const AppContainer: React.FC = () => {
  return (
    <div className="app-container">
      <StatusForm />
      <AerodromeImage />
    </div>
  );
}

export default AppContainer;
