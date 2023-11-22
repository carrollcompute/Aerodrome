import React, { useState, useContext, useEffect } from 'react';
import './PirepsStatus.css';
import { LoginContext } from '../../LoginContext';

interface PirepData {
  timeReceived: string;
  details: string;
  aircraftTypeAndLocation: string;
}

// Component for adding or editing PIREPs
const PirepsForm: React.FC<{ pirep: PirepData; onSave: (data: PirepData) => void; onCancel: () => void }> = ({ pirep, onSave, onCancel }) => {
  const [formData, setFormData] = useState<PirepData>(pirep);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="timeReceived" value={formData.timeReceived} onChange={handleChange} placeholder="Time Received" />
      <input name="details" value={formData.details} onChange={handleChange} placeholder="Details" />
      <input name="aircraftTypeAndLocation" value={formData.aircraftTypeAndLocation} onChange={handleChange} placeholder="Aircraft Type and Location" />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

const PirepsStatus: React.FC = () => {
  const [pireps, setPireps] = useState<PirepData[]>([]);
  const [editingPirep, setEditingPirep] = useState<PirepData | null>(null);
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    // Load PIREPs data initially - replace with actual data loading logic
    // setPireps(loadedData);
  }, []);

  const handleEdit = (pirep: PirepData) => {
    setEditingPirep(pirep);
  };

  const handleSave = (data: PirepData) => {
    if (editingPirep) {
      // Update existing PIREP
      setPireps(pireps.map(p => p === editingPirep ? data : p));
    } else {
      // Add new PIREP
      setPireps([...pireps, data]);
    }
    setEditingPirep(null);
  };

  const handleCancel = () => {
    setEditingPirep(null);
  };

  const handleAddNew = () => {
    setEditingPirep({ timeReceived: '', details: '', aircraftTypeAndLocation: '' });
  };

  return (
    <div className="pireps-status">
      <div className='pireps-title'>Pilot Reports (PIREPs)</div>
      {isLoggedIn && (
        <button onClick={handleAddNew}>Add New PIREP</button>
      )}
      {editingPirep ? (
        <PirepsForm pirep={editingPirep} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <table className="pireps-table">
          <thead>
            <tr>
              <th>Time Received</th>
              <th>Details</th>
              <th>Aircraft Type and Location</th>
              {isLoggedIn && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {pireps.map((pirep, index) => (
              <tr key={index}>
                <td>{pirep.timeReceived}</td>
                <td>{pirep.details}</td>
                <td>{pirep.aircraftTypeAndLocation}</td>
                {isLoggedIn && (
                  <td>
                    <button onClick={() => handleEdit(pirep)}>Edit</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PirepsStatus;
