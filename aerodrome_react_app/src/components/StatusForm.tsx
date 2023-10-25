import React, { useState } from 'react';
import './StatusForm.css';

// Define constants for status values
const STATUS_ACTIVE = 'Active';
const STATUS_INACTIVE = 'Inactive';

interface StatusItem {
  Name: string;
  Status: string;
}

interface StatusFormProps {
  initialData: { [key: string]: StatusItem };
}

const StatusForm: React.FC<StatusFormProps> = ({ initialData }) => {
  const [data, setData] = useState<{ [key: string]: StatusItem }>(initialData);

  const handleStatusChange = (key: string, newStatus: string) => {
    setData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        Status: newStatus,
      },
    }));
  };

  return (
    <form>
      <table className="status-form-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, { Name, Status }]) => (
            <tr key={key}>
              <td>{Name}</td>
              <td className={`status-${Status.toLowerCase()}`}>
                <select
                  value={Status}
                  onChange={(e) => handleStatusChange(key, e.target.value)}
                >
                  <option value={STATUS_ACTIVE}>{STATUS_ACTIVE}</option>
                  <option value={STATUS_INACTIVE}>{STATUS_INACTIVE}</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default StatusForm;
