import React from 'react';
import  "./Status.css";
import MainStatus from './components/MainStatus'; 
import AerodromeImage from './components/AerodromeImage'; 
import CableStatus from './components/CableStatus';
import RunwayStatus from './components/RunwayStatus';
import NavAidStatus from './components/NavAidStatus';
import Remarks from './components/Remarks';
import PirepsStatus from './components/PirepsStatus';


const Status: React.FC = () => {

  return (
    <div className='status-page-view'>
      <div className='left-view'>
        <MainStatus/>
        <PirepsStatus />
      </div>
      <div className='center-view'>
        <AerodromeImage />
        <Remarks />
      </div>
      <div className='right-view'>
        <RunwayStatus />
        <div className='coupled-view'>
          <CableStatus />
          <NavAidStatus />
        </div>
      </div>
    </div>
  );
}

export default Status;
