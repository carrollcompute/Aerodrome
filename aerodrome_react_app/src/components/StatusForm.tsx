import React, { useState } from 'react';
import './StatusForm.css'


interface StatusItem {
  Name: string;
  Status: string;
}

const initialData = {
    piste_active: {
      Name: "Piste Active",
      Status: "Active"
    },
    arff: {
      Name: "ARFF",
      Status: "Inactive"
    },
    act_aviaire_locale: {
      Name: "Act Aviaire Locale",
      Status: "Active"
    },
    sar_statut: {
      Name: "SAR Statut",
      Status: "Inactive"
    },
    sar_statut_ytr: {
      Name: "SAR Statut YTR",
      Status: "Active"
    },
    champ_tir_9mm: {
      Name: "Champ Tir 9mm",
      Status: "Active"
    },
    champ_planeur: {
      Name: "Champ Planeur",
      Status: "Inactive"
    },
    circuit: {
      Name: "Circuit",
      Status: "Active"
    },
    act_aviaire_migratoire: {
      Name: "Act Aviaire Migratoire",
      Status: "Active"
    },
    base_rescue: {
      Name: "Base Rescue",
      Status: "Inactive"
    },
    sar_statut_yzx: {
      Name: "SAR Statut YZX",
      Status: "Active"
    },
    grande_anse: {
      Name: "Grande Anse",
      Status: "Active"
    },
    remarques: {
      Name: "Remarques",
      Status: "Inactive"
    },
    asr: {
      Name: "ASR",
      Status: "Active"
    },
    ssr: {
      Name: "SSR",
      Status: "Inactive"
    },
    par: {
      Name: "PAR",
      Status: "Active"
    },
    ils: {
      Name: "ILS",
      Status: "Active"
    },
    tacan: {
      Name: "TACAN",
      Status: "Inactive"
    },
    ndb: {
      Name: "NDB",
      Status: "Active"
    }
  };
  

const StatusForm: React.FC = () => {
  const [data, setData] = useState<{ [key: string]: StatusItem }>(initialData);

  const handleStatusChange = (key: string, newStatus: string) => {
    setData(prevData => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        Status: newStatus
      }
    }));
  }

  return (
    <form>
      <table>
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
                <select 
                  value={item.Status} 
                  onChange={e => handleStatusChange(key, e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}

export default StatusForm;
