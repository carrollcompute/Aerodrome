import React from 'react';
import  "./Status.css";
import MainStatus from './components/MainStatus'; 
import AerodromeImage from './components/AerodromeImage'; 
import CableStatus from './components/CableStatus';
import RunwayStatus from './components/RunwayStatus';


const Status: React.FC = () => {

  return (
    <div className='status-view'>
      <MainStatus/>
      <AerodromeImage />
      <div className='runway-cable-status-view'>
        <RunwayStatus />
        <CableStatus />
      </div>
    </div>
  );
}

export default Status;
