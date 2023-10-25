import React from 'react';
import './StatusTable.css'; // You can reuse the same styles as StatusForm or have specific styles if needed

interface StatusItem {
  Name: string;
  Status: string;
}

interface StatusTableProps {
  data: { [key: string]: StatusItem };
}

const StatusTable: React.FC<StatusTableProps> = ({ data }) => {
  return (
    <table className='status-table'>
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
            <td className={`status-${item.Status.toLowerCase()}`}>{item.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StatusTable;
