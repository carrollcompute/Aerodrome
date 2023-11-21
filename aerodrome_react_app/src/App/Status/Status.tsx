import React from 'react';
import  "./Status.css";
import MainStatus from './components/MainStatus'; 
import AerodromeImage from './components/AerodromeImage'; 
import CableStatus from './components/CableStatus';
import RunwayStatus from './components/RunwayStatus';
import NavAidStatus from './components/NavAidStatus';


const Status: React.FC = () => {

  return (
    <div className='status-view'>
      <div className='main-status-view'>
        <MainStatus/>
      </div>
      <div className='aerodrome-image-view'>
        <AerodromeImage />
        <NavAidStatus />
      </div>
      <div className='runway-cable-status-view'>
        <RunwayStatus />
        <CableStatus />
      </div>
    </div>
  );
}

export default Status;
