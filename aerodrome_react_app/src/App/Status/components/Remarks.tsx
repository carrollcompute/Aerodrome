import React, { useState, useContext, useCallback } from 'react';
import './Remarks.css'; // You can style it as needed
import remarksData from '../../../data/RemarksData.json';
import { LoginContext } from '../../LoginContext';


const RemarksTable: React.FC<{ remarks: string }> = ({ remarks }) => (
  <table className="remarks-table">
    <thead>
      <tr>
        <th>Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{remarks}</td>
      </tr>
    </tbody>
  </table>
);

const EditableRemarks: React.FC<{ remarks: string; onRemarksChange: (newRemarks: string) => void }> = ({ remarks, onRemarksChange }) => (
  <textarea value={remarks} onChange={(e) => onRemarksChange(e.target.value)} />
);

const Remarks: React.FC = () => {
  const [remarks, setRemarks] = useState<string>(remarksData.remarks);
  const { isLoggedIn } = useContext(LoginContext);

  const handleRemarksChange = useCallback((newRemarks: string) => {
    setRemarks(newRemarks);
  }, []);

  return (
    <div className="remarks-container">
      {isLoggedIn ? (
        <EditableRemarks remarks={remarks} onRemarksChange={handleRemarksChange} />
      ) : (
        <RemarksTable remarks={remarks} />
      )}
    </div>
  );
};

export default Remarks;
