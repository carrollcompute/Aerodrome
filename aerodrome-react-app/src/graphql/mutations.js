/* eslint-disable */
// this is an auto generated file. This will be overwritten

/*
createPIREPSTable
updatePIREPSTable
deletePIREPSTable

createCablesTable
updateCablesTable
deleteCablesTable

createPisteConditionTable
updatePisteConditionTable
deletePisteConditionTable

createAerodromeTable
updateAerodromeTable
deleteAerodromeTable
*/

export const createPIREPSTable = /* GraphQL */ `
  mutation CreatePIREPSTable(
    $input: CreatePIREPSTableInput!
    $condition: ModelPIREPSTableConditionInput
  ) {
    createPIREPSTable(input: $input, condition: $condition) {
      id
      temps_recu
      details
      type_avion
      aerodrometableID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePIREPSTable = /* GraphQL */ `
  mutation UpdatePIREPSTable(
    $input: UpdatePIREPSTableInput!
    $condition: ModelPIREPSTableConditionInput
  ) {
    updatePIREPSTable(input: $input, condition: $condition) {
      id
      temps_recu
      details
      type_avion
      aerodrometableID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePIREPSTable = /* GraphQL */ `
  mutation DeletePIREPSTable(
    $input: DeletePIREPSTableInput!
    $condition: ModelPIREPSTableConditionInput
  ) {
    deletePIREPSTable(input: $input, condition: $condition) {
      id
      temps_recu
      details
      type_avion
      aerodrometableID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCablesTable = /* GraphQL */ `
  mutation CreateCablesTable(
    $input: CreateCablesTableInput!
    $condition: ModelCablesTableConditionInput
  ) {
    createCablesTable(input: $input, condition: $condition) {
      id
      asr
      ssr
      par
      ils
      tacan
      ndb
      aerodrometableID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCablesTable = /* GraphQL */ `
  mutation UpdateCablesTable(
    $input: UpdateCablesTableInput!
    $condition: ModelCablesTableConditionInput
  ) {
    updateCablesTable(input: $input, condition: $condition) {
      id
      asr
      ssr
      par
      ils
      tacan
      ndb
      aerodrometableID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCablesTable = /* GraphQL */ `
  mutation DeleteCablesTable(
    $input: DeleteCablesTableInput!
    $condition: ModelCablesTableConditionInput
  ) {
    deleteCablesTable(input: $input, condition: $condition) {
      id
      asr
      ssr
      par
      ils
      tacan
      ndb
      aerodrometableID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPisteConditionTable = /* GraphQL */ `
  mutation CreatePisteConditionTable(
    $input: CreatePisteConditionTableInput!
    $condition: ModelPisteConditionTableConditionInput
  ) {
    createPisteConditionTable(input: $input, condition: $condition) {
      id
      piste
      condition
      crfi
      precision
      aerodrometableID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePisteConditionTable = /* GraphQL */ `
  mutation UpdatePisteConditionTable(
    $input: UpdatePisteConditionTableInput!
    $condition: ModelPisteConditionTableConditionInput
  ) {
    updatePisteConditionTable(input: $input, condition: $condition) {
      id
      piste
      condition
      crfi
      precision
      aerodrometableID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePisteConditionTable = /* GraphQL */ `
  mutation DeletePisteConditionTable(
    $input: DeletePisteConditionTableInput!
    $condition: ModelPisteConditionTableConditionInput
  ) {
    deletePisteConditionTable(input: $input, condition: $condition) {
      id
      piste
      condition
      crfi
      precision
      aerodrometableID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAerodromeTable = /* GraphQL */ `
  mutation CreateAerodromeTable(
    $input: CreateAerodromeTableInput!
    $condition: ModelAerodromeTableConditionInput
  ) {
    createAerodromeTable(input: $input, condition: $condition) {
      id
      piste_active
      arff
      act_aviaire_locale
      sar_statut
      sar_statut_ytr
      champ_tir_9mm
      champ_planeur
      circuit
      act_aviaire_migratoire
      base_rescue
      sar_statut_yzx
      grande_anse
      remarques
      CablesTables {
        items {
          id
          asr
          ssr
          par
          ils
          tacan
          ndb
          aerodrometableID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PIREPSTables {
        items {
          id
          temps_recu
          details
          type_avion
          aerodrometableID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PisteConditionTables {
        items {
          id
          piste
          condition
          crfi
          precision
          aerodrometableID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAerodromeTable = /* GraphQL */ `
  mutation UpdateAerodromeTable(
    $input: UpdateAerodromeTableInput!
    $condition: ModelAerodromeTableConditionInput
  ) {
    updateAerodromeTable(input: $input, condition: $condition) {
      id
      piste_active
      arff
      act_aviaire_locale
      sar_statut
      sar_statut_ytr
      champ_tir_9mm
      champ_planeur
      circuit
      act_aviaire_migratoire
      base_rescue
      sar_statut_yzx
      grande_anse
      remarques
      CablesTables {
        items {
          id
          asr
          ssr
          par
          ils
          tacan
          ndb
          aerodrometableID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PIREPSTables {
        items {
          id
          temps_recu
          details
          type_avion
          aerodrometableID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PisteConditionTables {
        items {
          id
          piste
          condition
          crfi
          precision
          aerodrometableID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAerodromeTable = /* GraphQL */ `
  mutation DeleteAerodromeTable(
    $input: DeleteAerodromeTableInput!
    $condition: ModelAerodromeTableConditionInput
  ) {
    deleteAerodromeTable(input: $input, condition: $condition) {
      id
      piste_active
      arff
      act_aviaire_locale
      sar_statut
      sar_statut_ytr
      champ_tir_9mm
      champ_planeur
      circuit
      act_aviaire_migratoire
      base_rescue
      sar_statut_yzx
      grande_anse
      remarques
      CablesTables {
        items {
          id
          asr
          ssr
          par
          ils
          tacan
          ndb
          aerodrometableID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PIREPSTables {
        items {
          id
          temps_recu
          details
          type_avion
          aerodrometableID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PisteConditionTables {
        items {
          id
          piste
          condition
          crfi
          precision
          aerodrometableID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
