

## AerodromeTable

| Column name           | Data type | Description                  |
|-----------------------|-----------|------------------------------|
| id                    | UUID      | Primary key                  |
| piste_active          | Integer   | Active Piste                 |
| arff                  | String    | ARFF status                  |
| act_aviaire_locale    | String    | Local Avian Activity         |
| sar_statut            | String    | SAR Status                   |
| sar_statut_ytr        | String    | SAR Status YTR               |
| champ_tir_9mm         | String    | 9mm Shooting Range Status    |
| champ_planeur         | String    | Glider Field Status          |
| circuit               | String    | Circuit Status               |
| act_aviaire_migratoire| String    | Migratory Avian Activity     |
| base_rescue           | String    | Base Rescue Status           |
| sar_statut_yzx        | String    | SAR Status YZX               |
| grande_anse           | String    | Grande-Anse Status           |
| remarques             | String    | Remarks                      |


## PisteConditionTable

| Column name  | Data type | Description                             |
|--------------|-----------|-----------------------------------------|
| id           | UUID      | Primary key                             |
| aerodrome_id | UUID      | Foreign key referencing AerodromeTable  |
| piste        | String    | Piste Name                              |
| condition    | String    | Condition of the Piste                  |
| crfi         | String    | CRFI of the Piste                        |
| precision    | String    | Precision of the Piste                  |


## CablesTable

| Column name  | Data type | Description                             |
|--------------|-----------|-----------------------------------------|
| id           | UUID      | Primary key                             |
| aerodrome_id | UUID      | Foreign key referencing AerodromeTable  |
| cable        | String    | Cable Name                              |
| status       | String    | Status of the Cable                      |


## NAVAIDSTable

| Column name  | Data type | Description                             |
|--------------|-----------|-----------------------------------------|
| id           | UUID      | Primary key                             |
| aerodrome_id | UUID      | Foreign key referencing AerodromeTable  |
| asr          | String    | ASR Status                              |
| ssr          | String    | SSR Status                              |
| par          | String    | PAR Status                              |
| ils          | String    | ILS Status                              |
| tacan        | String    | TACAN Status                            |
| ndb          | String    | NDB Status                              |


## PIREPSTable

| Column name  | Data type | Description                             |
|--------------|-----------|-----------------------------------------|
| id           | UUID      | Primary key                             |
| aerodrome_id | UUID      | Foreign key referencing AerodromeTable  |
| temps_recu   | Time      | Time the report was received             |
| details      | String    | Details of the PIREP                     |
| type_avion   | String    | Type of the aircraft                     |
