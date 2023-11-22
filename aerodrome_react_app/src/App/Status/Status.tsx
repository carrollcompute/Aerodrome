import React from 'react';
import  "./Status.css";
import MainStatus from './components/MainStatus'; 
import AerodromeImage from './components/AerodromeImage'; 
import CableStatus from './components/CableStatus';
import RunwayStatus from './components/RunwayStatus';
import NavAidStatus from './components/NavAidStatus';
import Remarks from './components/Remarks';


const Status: React.FC = () => {

  return (
    <div className='status-page-view'>
      <div className='left-view'>
        <MainStatus/>
      </div>
      <div className='center-view'>
        <AerodromeImage />
        <Remarks />
        <NavAidStatus />
      </div>
      <div className='right-view'>
        <RunwayStatus />
        <CableStatus />
      </div>
    </div>
  );
}

export default Status;
