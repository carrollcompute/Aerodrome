import React from 'react';
import aerodromeImage from '../../../assets/Aerodrome.png';
import './AerodromeImage.css';

const AerodromeImage: React.FC = () => {
    return (
      <div className="aerodrome-image-container">
        <img src={aerodromeImage} alt="Aerodrome" className="aerodrome-image" />
      </div>
    );
  }

export default AerodromeImage;
