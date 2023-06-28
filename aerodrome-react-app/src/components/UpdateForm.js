import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { updateAerodromeTable } from '../graphql/mutations';
import './UpdateForm.css';


const UpdateForm = ({ aerodromeTable }) => {
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
        <div>
          <label>Piste Active:</label>
          <input
            type="text"
            name="piste_active"
            value={formValues.piste_active}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>ARFF:</label>
          <input
            type="text"
            name="arff"
            value={formValues.arff}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Act Aviaire Locale:</label>
          <input
            type="text"
            name="act_aviaire_locale"
            value={formValues.act_aviaire_locale}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Act Aviaire Migratoire:</label>
          <input
            type="text"
            name="act_aviaire_migratoire"
            value={formValues.act_aviaire_migratoire}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>SAR Statut:</label>
          <input
            type="text"
            name="sar_statut"
            value={formValues.sar_statut}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>SAR Statut YTR:</label>
          <input
            type="text"
            name="sar_statut_ytr"
            value={formValues.sar_statut_ytr}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Champ Tir 9mm:</label>
          <input
            type="text"
            name="champ_tir_9mm"
            value={formValues.champ_tir_9mm}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Champ Planeur:</label>
          <input
            type="text"
            name="champ_planeur"
            value={formValues.champ_planeur}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Circuit:</label>
          <input
            type="text"
            name="circuit"
            value={formValues.circuit}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Base Rescue:</label>
          <input
            type="text"
            name="base_rescue"
            value={formValues.base_rescue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>SAR Statut YZX:</label>
          <input
            type="text"
            name="sar_statut_yzx"
            value={formValues.sar_statut_yzx}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Grande Anse:</label>
          <input
            type="text"
            name="grande_anse"
            value={formValues.grande_anse}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Remarques:</label>
          <input
            type="text"
            name="remarques"
            value={formValues.remarques}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other fields here based on your AerodromeTable structure */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
