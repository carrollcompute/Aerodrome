import React, { useState, useContext } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { updateAerodromeTable } from '../graphql/mutations';
import './UpdateForm.css';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';

const UpdateForm = ({ aerodromeTable }) => {
  const navigate = useNavigate();
  const { updateData } = useContext(DataContext);

  const [formValues, setFormValues] = useState({
    // Initialize form values with existing data
    piste_active: aerodromeTable.piste_active,
    arff: aerodromeTable.arff,
    act_aviaire_locale: aerodromeTable.act_aviaire_locale,
    act_aviaire_migratoire: aerodromeTable.act_aviaire_migratoire,
    sar_statut: aerodromeTable.sar_statut,
    sar_statut_ytr: aerodromeTable.sar_statut_ytr,
    champ_tir_9mm: aerodromeTable.champ_tir_9mm,
    champ_planeur: aerodromeTable.champ_planeur,
    circuit: aerodromeTable.circuit,
    base_rescue: aerodromeTable.base_rescue,
    sar_statut_yzx: aerodromeTable.sar_statut_yzx,
    grande_anse: aerodromeTable.grande_anse,
    remarques: aerodromeTable.remarques,
    // Add other fields here based on your AerodromeTable structure
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare the input object for the mutation
      const input = {
        id: aerodromeTable.id,
        ...formValues,
      };

      // Call the updateAerodromeTable mutation
      const response = await API.graphql(
        graphqlOperation(updateAerodromeTable, { input })
      );

      console.log('Updated AerodromeTable:', response.data.updateAerodromeTable);

      // Call the updateData function to notify the home page and trigger a data refresh
      updateData(response.data.updateAerodromeTable);

      // Navigate to the home page
      navigate('/');

      // Optionally, perform any additional actions upon successful update
    } catch (error) {
      console.error('Error updating AerodromeTable:', error);
      // Handle any errors that occur during the mutation
    }
  };

  
  return (
    <div className="update-form">
      <h2>Update AerodromeTable</h2>
      <form onSubmit={handleSubmit}>
        {/* Render form fields based on the fields you want to update */}
        <table className="aerodrome-table">
          <tr>
            <th>Piste Active:</th>
            <td>
              <select
                name="piste_active"
                value={formValues.piste_active}
                onChange={handleInputChange}
              >
                <option value="11">11</option>
                <option value="18">18</option>
                <option value="29">29</option>
                <option value="36">36</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>ARFF:</th>
            <td>
              <select
                name="arff"
                value={formValues.arff}
                onChange={handleInputChange}
              >
                <option value="CAT-1">CAT-1</option>
                <option value="CAT-2">CAT-2</option>
                <option value="CAT-3">CAT-3</option>
                <option value="CAT-4">CAT-4</option>
                <option value="CAT-5">CAT-5</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Act Aviaire Locale:</th>
            <td>
              <select
                name="act_aviaire_locale"
                value={formValues.act_aviaire_locale}
                onChange={handleInputChange}
              >
                <option value="Faible">Faible</option>
                <option value="Moyen">Moyen</option>
                <option value="Fort">Fort</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Act Aviaire Migratoire:</th>
            <td>
              <select
                name="act_aviaire_migratoire"
                value={formValues.act_aviaire_migratoire}
                onChange={handleInputChange}
              >
                <option value="Faible">Faible</option>
                <option value="Moyen">Moyen</option>
                <option value="Fort">Fort</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>SAR Statut:</th>
            <td>
              <select
                name="sar_statut"
                value={formValues.sar_statut}
                onChange={handleInputChange}
              >
                <option value="Vert">Vert</option>
                <option value="Jaune">Jaune</option>
                <option value="Rouge">Rouge</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>SAR Statut YTR:</th>
            <td>
              <select
                name="sar_statut_ytr"
                value={formValues.sar_statut_ytr}
                onChange={handleInputChange}
              >
                <option value="Vert">Vert</option>
                <option value="Jaune">Jaune</option>
                <option value="Rouge">Rouge</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Champ Tir 9mm:</th>
            <td>
              <select
                name="champ_tir_9mm"
                value={formValues.champ_tir_9mm}
                onChange={handleInputChange}
              >
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>Champ Planeur:</th>
            <td>
              <select
                name="champ_planeur"
                value={formValues.champ_planeur}
                onChange={handleInputChange}
              >
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>Circuit:</th>
            <td>
              <select
                name="circuit"
                value={formValues.circuit}
                onChange={handleInputChange}
              >
                <option value="Ouvert">Ouvert</option>
                <option value="Fermé">Fermé</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>Base Rescue:</th>
            <td>
              <select
                name="base_rescue"
                value={formValues.base_rescue}
                onChange={handleInputChange}
              >
                <option value="Vert">Vert</option>
                <option value="Jaune">Jaune</option>
                <option value="Rouge">Rouge</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>SAR Statut YZX:</th>
            <td>
              <select
                name="sar_statut_yzx"
                value={formValues.sar_statut_yzx}
                onChange={handleInputChange}
              >
                <option value="Vert">Vert</option>
                <option value="Jaune">Jaune</option>
                <option value="Rouge">Rouge</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>Grande Anse:</th>
            <td>
              <select
                name="grande_anse"
                value={formValues.grande_anse}
                onChange={handleInputChange}
              >
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>Remarques:</th>
            <td>
              <textarea
                name="remarques"
                value={formValues.remarques}
                onChange={handleInputChange}
                className="larger-textbox" // Apply the "larger-textbox" class
              ></textarea>
            </td>
          </tr>

        </table>

        {/* Add other fields here based on your AerodromeTable structure */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
