import { API } from "aws-amplify";
import { createAerodromeTable } from './graphql/mutations';

const newAerodromeTable = await API.graphql({
    query: createAerodromeTable,
    variables: {
        input: {
		"piste_active": 1020,
		"arff": "Lorem ipsum dolor sit amet",
		"act_aviaire_locale": "Lorem ipsum dolor sit amet",
		"sar_statut": "Lorem ipsum dolor sit amet",
		"sar_statut_ytr": "Lorem ipsum dolor sit amet",
		"champ_tir_9mm": "Lorem ipsum dolor sit amet",
		"champ_planeur": "Lorem ipsum dolor sit amet",
		"circuit": "Lorem ipsum dolor sit amet",
		"act_aviaire_migratoire": "Lorem ipsum dolor sit amet",
		"base_rescue": "Lorem ipsum dolor sit amet",
		"sar_statut_yzx": "Lorem ipsum dolor sit amet",
		"grande_anse": "Lorem ipsum dolor sit amet",
		"remarques": "Lorem ipsum dolor sit amet",
		"CablesTables": [],
		"PIREPSTables": [],
		"PisteConditionTables": []
	}
    }
});

const updatedAerodromeTable = await API.graphql({
    query: updateAerodromeTable,
    variables: {
        input: {
		"piste_active": 1020,
		"arff": "Lorem ipsum dolor sit amet",
		"act_aviaire_locale": "Lorem ipsum dolor sit amet",
		"sar_statut": "Lorem ipsum dolor sit amet",
		"sar_statut_ytr": "Lorem ipsum dolor sit amet",
		"champ_tir_9mm": "Lorem ipsum dolor sit amet",
		"champ_planeur": "Lorem ipsum dolor sit amet",
		"circuit": "Lorem ipsum dolor sit amet",
		"act_aviaire_migratoire": "Lorem ipsum dolor sit amet",
		"base_rescue": "Lorem ipsum dolor sit amet",
		"sar_statut_yzx": "Lorem ipsum dolor sit amet",
		"grande_anse": "Lorem ipsum dolor sit amet",
		"remarques": "Lorem ipsum dolor sit amet",
		"CablesTables": [],
		"PIREPSTables": [],
		"PisteConditionTables": []
	}
    }
});

const newCablesTable = await API.graphql({
    query: createCablesTable,
    variables: {
        input: {
		"asr": "Lorem ipsum dolor sit amet",
		"ssr": "Lorem ipsum dolor sit amet",
		"par": "Lorem ipsum dolor sit amet",
		"ils": "Lorem ipsum dolor sit amet",
		"tacan": "Lorem ipsum dolor sit amet",
		"ndb": "Lorem ipsum dolor sit amet",
		"aerodrometableID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	}
    }
});

const updatedCablesTable = await API.graphql({
    query: updateCablesTable,
    variables: {
        input: {
		"asr": "Lorem ipsum dolor sit amet",
		"ssr": "Lorem ipsum dolor sit amet",
		"par": "Lorem ipsum dolor sit amet",
		"ils": "Lorem ipsum dolor sit amet",
		"tacan": "Lorem ipsum dolor sit amet",
		"ndb": "Lorem ipsum dolor sit amet",
		"aerodrometableID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	}
    }
});

const newPisteConditionTable = await API.graphql({
    query: createPisteConditionTable,
    variables: {
        input: {
		"piste": "Lorem ipsum dolor sit amet",
		"condition": "Lorem ipsum dolor sit amet",
		"crfi": "Lorem ipsum dolor sit amet",
		"precision": "Lorem ipsum dolor sit amet",
		"aerodrometableID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	}
    }
});

const updatedPisteConditionTable = await API.graphql({
    query: updatePisteConditionTable,
    variables: {
        input: {
		"piste": "Lorem ipsum dolor sit amet",
		"condition": "Lorem ipsum dolor sit amet",
		"crfi": "Lorem ipsum dolor sit amet",
		"precision": "Lorem ipsum dolor sit amet",
		"aerodrometableID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	}
    }
});

const newPIREPSTable = await API.graphql({
    query: createPIREPSTable,
    variables: {
        input: {
		"temps_recu": "1970-01-01T12:30:23.999Z",
		"details": "Lorem ipsum dolor sit amet",
		"type_avion": "Lorem ipsum dolor sit amet",
		"aerodrometableID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	}
    }
});

const updatedPIREPSTable = await API.graphql({
    query: updatePIREPSTable,
    variables: {
        input: {
		"temps_recu": "1970-01-01T12:30:23.999Z",
		"details": "Lorem ipsum dolor sit amet",
		"type_avion": "Lorem ipsum dolor sit amet",
		"aerodrometableID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	}
    }
});