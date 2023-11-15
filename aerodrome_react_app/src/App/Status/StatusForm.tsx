import React, { useState } from 'react';
import './StatusForm.css';
import { initialData } from './StatusData';
import StatusTableComponent, { StatusItem } from './StatusTableComponent'; // Import StatusItem here

const STATUS_ACTIVE = 'Active';
const STATUS_INACTIVE = 'Inactive';

const StatusForm: React.FC = () => {
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
      <StatusTableComponent data={data}>
        {(item, key) => (
          <select
            value={item.Status}
            onChange={(e) => handleStatusChange(key, e.target.value)}
          >
            <option value={STATUS_ACTIVE}>{STATUS_ACTIVE}</option>
            <option value={STATUS_INACTIVE}>{STATUS_INACTIVE}</option>
          </select>
        )}
      </StatusTableComponent>
    </form>
  );
};

export default StatusForm;
