/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPIREPSTable = /* GraphQL */ `
  query GetPIREPSTable($id: ID!) {
    getPIREPSTable(id: $id) {
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
export const listPIREPSTables = /* GraphQL */ `
  query ListPIREPSTables(
    $filter: ModelPIREPSTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPIREPSTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const pIREPSTablesByAerodrometableID = /* GraphQL */ `
  query PIREPSTablesByAerodrometableID(
    $aerodrometableID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPIREPSTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pIREPSTablesByAerodrometableID(
      aerodrometableID: $aerodrometableID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCablesTable = /* GraphQL */ `
  query GetCablesTable($id: ID!) {
    getCablesTable(id: $id) {
      id
      name
      Condition
      aerodrometableID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCablesTables = /* GraphQL */ `
  query ListCablesTables(
    $filter: ModelCablesTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCablesTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Condition
        aerodrometableID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cablesTablesByAerodrometableID = /* GraphQL */ `
  query CablesTablesByAerodrometableID(
    $aerodrometableID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCablesTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cablesTablesByAerodrometableID(
      aerodrometableID: $aerodrometableID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        Condition
        aerodrometableID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPisteConditionTable = /* GraphQL */ `
  query GetPisteConditionTable($id: ID!) {
    getPisteConditionTable(id: $id) {
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
export const listPisteConditionTables = /* GraphQL */ `
  query ListPisteConditionTables(
    $filter: ModelPisteConditionTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPisteConditionTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const pisteConditionTablesByAerodrometableID = /* GraphQL */ `
  query PisteConditionTablesByAerodrometableID(
    $aerodrometableID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPisteConditionTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pisteConditionTablesByAerodrometableID(
      aerodrometableID: $aerodrometableID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getAerodromeTable = /* GraphQL */ `
  query GetAerodromeTable($id: ID!) {
    getAerodromeTable(id: $id) {
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
          name
          Condition
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
export const listAerodromeTables = /* GraphQL */ `
  query ListAerodromeTables(
    $filter: ModelAerodromeTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAerodromeTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
          __typename
        }
        PIREPSTables {
          nextToken
          __typename
        }
        PisteConditionTables {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
