import React from 'react';

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

export default StatusTableComponent;
