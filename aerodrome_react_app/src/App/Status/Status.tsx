import React from 'react';
import MainStatus from './components/MainStatus'; 
import AerodromeImage from './components/AerodromeImage'; 
import CableStatus from './components/CableStatus';
import  "./Status.css";


const Status: React.FC = () => {

  return (
    <div className='status-view'>
      <MainStatus/>
      <AerodromeImage />
      <CableStatus />
    </div>
  );
}

export default Status;
