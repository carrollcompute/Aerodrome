import React from 'react';
import MainStatus from './components/MainStatus'; 
import AerodromeImage from './components/AerodromeImage'; 
import  "./Status.css";


const Status: React.FC = () => {

  return (
    <div className='status-view'>
      <MainStatus/>
      <AerodromeImage />
    </div>
  );
}

export default Status;
