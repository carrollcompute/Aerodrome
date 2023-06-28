/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePIREPSTable = /* GraphQL */ `
  subscription OnCreatePIREPSTable(
    $filter: ModelSubscriptionPIREPSTableFilterInput
  ) {
    onCreatePIREPSTable(filter: $filter) {
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
export const onUpdatePIREPSTable = /* GraphQL */ `
  subscription OnUpdatePIREPSTable(
    $filter: ModelSubscriptionPIREPSTableFilterInput
  ) {
    onUpdatePIREPSTable(filter: $filter) {
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
export const onDeletePIREPSTable = /* GraphQL */ `
  subscription OnDeletePIREPSTable(
    $filter: ModelSubscriptionPIREPSTableFilterInput
  ) {
    onDeletePIREPSTable(filter: $filter) {
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
export const onCreateCablesTable = /* GraphQL */ `
  subscription OnCreateCablesTable(
    $filter: ModelSubscriptionCablesTableFilterInput
  ) {
    onCreateCablesTable(filter: $filter) {
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
export const onUpdateCablesTable = /* GraphQL */ `
  subscription OnUpdateCablesTable(
    $filter: ModelSubscriptionCablesTableFilterInput
  ) {
    onUpdateCablesTable(filter: $filter) {
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
export const onDeleteCablesTable = /* GraphQL */ `
  subscription OnDeleteCablesTable(
    $filter: ModelSubscriptionCablesTableFilterInput
  ) {
    onDeleteCablesTable(filter: $filter) {
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
export const onCreatePisteConditionTable = /* GraphQL */ `
  subscription OnCreatePisteConditionTable(
    $filter: ModelSubscriptionPisteConditionTableFilterInput
  ) {
    onCreatePisteConditionTable(filter: $filter) {
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
export const onUpdatePisteConditionTable = /* GraphQL */ `
  subscription OnUpdatePisteConditionTable(
    $filter: ModelSubscriptionPisteConditionTableFilterInput
  ) {
    onUpdatePisteConditionTable(filter: $filter) {
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
export const onDeletePisteConditionTable = /* GraphQL */ `
  subscription OnDeletePisteConditionTable(
    $filter: ModelSubscriptionPisteConditionTableFilterInput
  ) {
    onDeletePisteConditionTable(filter: $filter) {
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
export const onCreateAerodromeTable = /* GraphQL */ `
  subscription OnCreateAerodromeTable(
    $filter: ModelSubscriptionAerodromeTableFilterInput
  ) {
    onCreateAerodromeTable(filter: $filter) {
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
export const onUpdateAerodromeTable = /* GraphQL */ `
  subscription OnUpdateAerodromeTable(
    $filter: ModelSubscriptionAerodromeTableFilterInput
  ) {
    onUpdateAerodromeTable(filter: $filter) {
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
export const onDeleteAerodromeTable = /* GraphQL */ `
  subscription OnDeleteAerodromeTable(
    $filter: ModelSubscriptionAerodromeTableFilterInput
  ) {
    onDeleteAerodromeTable(filter: $filter) {
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
