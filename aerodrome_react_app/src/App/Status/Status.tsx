import React, { useState, useCallback, useContext } from 'react';
import './Status.css';
import { initialData } from '../../data/StatusData';
import { LoginContext } from '../LoginContext';


export interface StatusItem {
  Name: string;
  Status: string;
}

interface StatusTableComponentProps {
  data: { [key: string]: StatusItem };
  children: (item: StatusItem, key: string) => React.ReactNode;
}

const MainStatusTable: React.FC<StatusTableComponentProps> = ({ data, children }) => (
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

const STATUS_ACTIVE = 'Active';
const STATUS_INACTIVE = 'Inactive';

const StatusSelector: React.FC<{ status: string; onChange: (newStatus: string) => void }> = ({ status, onChange }) => (
  <select value={status} onChange={(e) => onChange(e.target.value)}>
    <option value={STATUS_ACTIVE}>{STATUS_ACTIVE}</option>
    <option value={STATUS_INACTIVE}>{STATUS_INACTIVE}</option>
  </select>
);

const StatusForm: React.FC<{ data: { [key: string]: StatusItem } }> = ({ data }) => {
  const [statusData, setStatusData] = useState<{ [key: string]: StatusItem }>(data);

  const handleStatusChange = useCallback((key: string, newStatus: string) => {
    setStatusData(prevData => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        Status: newStatus,
      },
    }));
  }, []);

  return (
    <form>
      <MainStatusTable data={statusData}>
        {(item, key) => <StatusSelector key={key} status={item.Status} onChange={(newStatus) => handleStatusChange(key, newStatus)} />}
      </MainStatusTable>
    </form>
  );
};



const StatusTable: React.FC<{ data: { [key: string]: StatusItem } }> = ({ data }) => (
  <MainStatusTable data={data}>
    {(item) => item.Status}
  </MainStatusTable>
);

const Status: React.FC = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return isLoggedIn ? <StatusForm data={initialData} /> : <StatusTable data={initialData} />;
}

export default Status;
