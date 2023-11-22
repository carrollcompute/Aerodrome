import React from 'react';
import  "./Status.css";
import MainStatus from './components/MainStatus'; 
import AerodromeImage from './components/AerodromeImage'; 
import CableStatus from './components/CableStatus';
import RunwayStatus from './components/RunwayStatus';
import NavAidStatus from './components/NavAidStatus';
import activeRunway from '../../data/ActiveRunwayData.json';
import Remarks from './components/Remarks';


const Status: React.FC = () => {

  return (
    <div className='status-view'>
      <div className='main-status-view'>
        <MainStatus/>
      </div>
      <div className='aerodrome-image-view'>
        <div className='aerodrome-image-title'>
          <h2>Active Runway: {activeRunway.Runway}</h2>
        </div>
        <AerodromeImage />
        <Remarks />
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
