
import React, { useState, useContext } from 'react';
import './Status.css';
import { initialData } from '../../data/StatusData';
import { useLogin } from '../LoginContext';

export interface StatusItem {
  Name: string;
  Status: string;
}

interface StatusTableComponentProps {
  data: { [key: string]: StatusItem };
  children: (item: StatusItem, key: string) => React.ReactNode;
}

const StatusTableComponent: React.FC<StatusTableComponentProps> = ({ data, children }) => {
  return (
    <table className="status-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, item]) => (
          <tr key={key}>
            <td>{item.Name}</td>
            <td className={`status-${item.Status.toLowerCase()}`}>
              {children(item, key)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const STATUS_ACTIVE = 'Active';
const STATUS_INACTIVE = 'Inactive';

const StatusForm: React.FC<{ data: { [key: string]: StatusItem }; }> = ({ data: initialData }) => {
  const [data, setData] = useState<{ [key: string]: StatusItem }>(initialData);

  const handleStatusChange = (key: string, newStatus: string) => {
    setData(prevData => ({
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
            key={key}
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

const StatusTable: React.FC<{ data: { [key: string]: StatusItem }; }> = ({ data }) => {
  return (
    <StatusTableComponent data={data}>
      {(item) => item.Status}
    </StatusTableComponent>
  );
}

const Status: React.FC = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <StatusForm data={initialData} /> : <StatusTable data={initialData} />;
}

export default Status;
