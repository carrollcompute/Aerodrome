/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  StepperField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { AerodromeStatus } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AerodromeStatusForm(props) {
  const {
    id: idProp,
    aerodromeStatus: aerodromeStatusModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    piste_active: 0,
    arff: "",
    act_aviaire_locale: "",
    sar_statut: "",
    sar_statut_ytr: "",
    champ_tir_9mm: "",
    champ_planeur: "",
    circuit: "",
    act_aviaire_migratoire: "",
    base_rescue: "",
    sar_statut_yzx: "",
    grande_anse: "",
    remarques: "",
  };
  const [piste_active, setPiste_active] = React.useState(
    initialValues.piste_active
  );
  const [arff, setArff] = React.useState(initialValues.arff);
  const [act_aviaire_locale, setAct_aviaire_locale] = React.useState(
    initialValues.act_aviaire_locale
  );
  const [sar_statut, setSar_statut] = React.useState(initialValues.sar_statut);
  const [sar_statut_ytr, setSar_statut_ytr] = React.useState(
    initialValues.sar_statut_ytr
  );
  const [champ_tir_9mm, setChamp_tir_9mm] = React.useState(
    initialValues.champ_tir_9mm
  );
  const [champ_planeur, setChamp_planeur] = React.useState(
    initialValues.champ_planeur
  );
  const [circuit, setCircuit] = React.useState(initialValues.circuit);
  const [act_aviaire_migratoire, setAct_aviaire_migratoire] = React.useState(
    initialValues.act_aviaire_migratoire
  );
  const [base_rescue, setBase_rescue] = React.useState(
    initialValues.base_rescue
  );
  const [sar_statut_yzx, setSar_statut_yzx] = React.useState(
    initialValues.sar_statut_yzx
  );
  const [grande_anse, setGrande_anse] = React.useState(
    initialValues.grande_anse
  );
  const [remarques, setRemarques] = React.useState(initialValues.remarques);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aerodromeStatusRecord
      ? { ...initialValues, ...aerodromeStatusRecord }
      : initialValues;
    setPiste_active(cleanValues.piste_active);
    setArff(cleanValues.arff);
    setAct_aviaire_locale(cleanValues.act_aviaire_locale);
    setSar_statut(cleanValues.sar_statut);
    setSar_statut_ytr(cleanValues.sar_statut_ytr);
    setChamp_tir_9mm(cleanValues.champ_tir_9mm);
    setChamp_planeur(cleanValues.champ_planeur);
    setCircuit(cleanValues.circuit);
    setAct_aviaire_migratoire(cleanValues.act_aviaire_migratoire);
    setBase_rescue(cleanValues.base_rescue);
    setSar_statut_yzx(cleanValues.sar_statut_yzx);
    setGrande_anse(cleanValues.grande_anse);
    setRemarques(cleanValues.remarques);
    setErrors({});
  };
  const [aerodromeStatusRecord, setAerodromeStatusRecord] = React.useState(
    aerodromeStatusModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(AerodromeStatus, idProp)
        : aerodromeStatusModelProp;
      setAerodromeStatusRecord(record);
    };
    queryData();
  }, [idProp, aerodromeStatusModelProp]);
  React.useEffect(resetStateValues, [aerodromeStatusRecord]);
  const validations = {
    piste_active: [{ type: "Required" }],
    arff: [],
    act_aviaire_locale: [],
    sar_statut: [],
    sar_statut_ytr: [],
    champ_tir_9mm: [],
    champ_planeur: [],
    circuit: [],
    act_aviaire_migratoire: [],
    base_rescue: [],
    sar_statut_yzx: [],
    grande_anse: [],
    remarques: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.xxs.value}
      columnGap={tokens.space.xs.value}
      padding={tokens.space.xs.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          piste_active,
          arff,
          act_aviaire_locale,
          sar_statut,
          sar_statut_ytr,
          champ_tir_9mm,
          champ_planeur,
          circuit,
          act_aviaire_migratoire,
          base_rescue,
          sar_statut_yzx,
          grande_anse,
          remarques,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            AerodromeStatus.copyOf(aerodromeStatusRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AerodromeStatusForm")}
      {...rest}
    >
      <StepperField
        label="Piste active"
        isReadOnly={false}
        isRequired={true}
        value={piste_active}
        onStepChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              piste_active: value,
              arff,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur,
              circuit,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.piste_active ?? value;
          }
          if (errors.piste_active?.hasError) {
            runValidationTasks("piste_active", value);
          }
          setPiste_active(value);
        }}
        onBlur={() => runValidationTasks("piste_active", piste_active)}
        errorMessage={errors.piste_active?.errorMessage}
        hasError={errors.piste_active?.hasError}
        {...getOverrideProps(overrides, "piste_active")}
      ></StepperField>
      <TextField
        label="Arff"
        isRequired={false}
        isReadOnly={false}
        value={arff}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff: value,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur,
              circuit,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.arff ?? value;
          }
          if (errors.arff?.hasError) {
            runValidationTasks("arff", value);
          }
          setArff(value);
        }}
        onBlur={() => runValidationTasks("arff", arff)}
        errorMessage={errors.arff?.errorMessage}
        hasError={errors.arff?.hasError}
        {...getOverrideProps(overrides, "arff")}
      ></TextField>
      <TextField
        label="Act aviaire locale"
        isRequired={false}
        isReadOnly={false}
        value={act_aviaire_locale}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale: value,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur,
              circuit,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.act_aviaire_locale ?? value;
          }
          if (errors.act_aviaire_locale?.hasError) {
            runValidationTasks("act_aviaire_locale", value);
          }
          setAct_aviaire_locale(value);
        }}
        onBlur={() =>
          runValidationTasks("act_aviaire_locale", act_aviaire_locale)
        }
        errorMessage={errors.act_aviaire_locale?.errorMessage}
        hasError={errors.act_aviaire_locale?.hasError}
        {...getOverrideProps(overrides, "act_aviaire_locale")}
      ></TextField>
      <TextField
        label="Sar statut"
        isRequired={false}
        isReadOnly={false}
        value={sar_statut}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale,
              sar_statut: value,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur,
              circuit,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.sar_statut ?? value;
          }
          if (errors.sar_statut?.hasError) {
            runValidationTasks("sar_statut", value);
          }
          setSar_statut(value);
        }}
        onBlur={() => runValidationTasks("sar_statut", sar_statut)}
        errorMessage={errors.sar_statut?.errorMessage}
        hasError={errors.sar_statut?.hasError}
        {...getOverrideProps(overrides, "sar_statut")}
      ></TextField>
      <TextField
        label="Sar statut ytr"
        isRequired={false}
        isReadOnly={false}
        value={sar_statut_ytr}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr: value,
              champ_tir_9mm,
              champ_planeur,
              circuit,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.sar_statut_ytr ?? value;
          }
          if (errors.sar_statut_ytr?.hasError) {
            runValidationTasks("sar_statut_ytr", value);
          }
          setSar_statut_ytr(value);
        }}
        onBlur={() => runValidationTasks("sar_statut_ytr", sar_statut_ytr)}
        errorMessage={errors.sar_statut_ytr?.errorMessage}
        hasError={errors.sar_statut_ytr?.hasError}
        {...getOverrideProps(overrides, "sar_statut_ytr")}
      ></TextField>
      <TextField
        label="Champ tir 9mm"
        isRequired={false}
        isReadOnly={false}
        value={champ_tir_9mm}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm: value,
              champ_planeur,
              circuit,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.champ_tir_9mm ?? value;
          }
          if (errors.champ_tir_9mm?.hasError) {
            runValidationTasks("champ_tir_9mm", value);
          }
          setChamp_tir_9mm(value);
        }}
        onBlur={() => runValidationTasks("champ_tir_9mm", champ_tir_9mm)}
        errorMessage={errors.champ_tir_9mm?.errorMessage}
        hasError={errors.champ_tir_9mm?.hasError}
        {...getOverrideProps(overrides, "champ_tir_9mm")}
      ></TextField>
      <TextField
        label="Champ planeur"
        isRequired={false}
        isReadOnly={false}
        value={champ_planeur}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur: value,
              circuit,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.champ_planeur ?? value;
          }
          if (errors.champ_planeur?.hasError) {
            runValidationTasks("champ_planeur", value);
          }
          setChamp_planeur(value);
        }}
        onBlur={() => runValidationTasks("champ_planeur", champ_planeur)}
        errorMessage={errors.champ_planeur?.errorMessage}
        hasError={errors.champ_planeur?.hasError}
        {...getOverrideProps(overrides, "champ_planeur")}
      ></TextField>
      <TextField
        label="Circuit"
        isRequired={false}
        isReadOnly={false}
        value={circuit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur,
              circuit: value,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.circuit ?? value;
          }
          if (errors.circuit?.hasError) {
            runValidationTasks("circuit", value);
          }
          setCircuit(value);
        }}
        onBlur={() => runValidationTasks("circuit", circuit)}
        errorMessage={errors.circuit?.errorMessage}
        hasError={errors.circuit?.hasError}
        {...getOverrideProps(overrides, "circuit")}
      ></TextField>
      <TextField
        label="Act aviaire migratoire"
        isRequired={false}
        isReadOnly={false}
        value={act_aviaire_migratoire}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur,
              circuit,
              act_aviaire_migratoire: value,
              base_rescue,
              sar_statut_yzx,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.act_aviaire_migratoire ?? value;
          }
          if (errors.act_aviaire_migratoire?.hasError) {
            runValidationTasks("act_aviaire_migratoire", value);
          }
          setAct_aviaire_migratoire(value);
        }}
        onBlur={() =>
          runValidationTasks("act_aviaire_migratoire", act_aviaire_migratoire)
        }
        errorMessage={errors.act_aviaire_migratoire?.errorMessage}
        hasError={errors.act_aviaire_migratoire?.hasError}
        {...getOverrideProps(overrides, "act_aviaire_migratoire")}
      ></TextField>
      <TextField
        label="Base rescue"
        isRequired={false}
        isReadOnly={false}
        value={base_rescue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur,
              circuit,
              act_aviaire_migratoire,
              base_rescue: value,
              sar_statut_yzx,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.base_rescue ?? value;
          }
          if (errors.base_rescue?.hasError) {
            runValidationTasks("base_rescue", value);
          }
          setBase_rescue(value);
        }}
        onBlur={() => runValidationTasks("base_rescue", base_rescue)}
        errorMessage={errors.base_rescue?.errorMessage}
        hasError={errors.base_rescue?.hasError}
        {...getOverrideProps(overrides, "base_rescue")}
      ></TextField>
      <TextField
        label="Sar statut yzx"
        isRequired={false}
        isReadOnly={false}
        value={sar_statut_yzx}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur,
              circuit,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx: value,
              grande_anse,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.sar_statut_yzx ?? value;
          }
          if (errors.sar_statut_yzx?.hasError) {
            runValidationTasks("sar_statut_yzx", value);
          }
          setSar_statut_yzx(value);
        }}
        onBlur={() => runValidationTasks("sar_statut_yzx", sar_statut_yzx)}
        errorMessage={errors.sar_statut_yzx?.errorMessage}
        hasError={errors.sar_statut_yzx?.hasError}
        {...getOverrideProps(overrides, "sar_statut_yzx")}
      ></TextField>
      <TextField
        label="Grande anse"
        isRequired={false}
        isReadOnly={false}
        value={grande_anse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur,
              circuit,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx,
              grande_anse: value,
              remarques,
            };
            const result = onChange(modelFields);
            value = result?.grande_anse ?? value;
          }
          if (errors.grande_anse?.hasError) {
            runValidationTasks("grande_anse", value);
          }
          setGrande_anse(value);
        }}
        onBlur={() => runValidationTasks("grande_anse", grande_anse)}
        errorMessage={errors.grande_anse?.errorMessage}
        hasError={errors.grande_anse?.hasError}
        {...getOverrideProps(overrides, "grande_anse")}
      ></TextField>
      <TextField
        label="Remarques"
        isRequired={false}
        isReadOnly={false}
        value={remarques}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              piste_active,
              arff,
              act_aviaire_locale,
              sar_statut,
              sar_statut_ytr,
              champ_tir_9mm,
              champ_planeur,
              circuit,
              act_aviaire_migratoire,
              base_rescue,
              sar_statut_yzx,
              grande_anse,
              remarques: value,
            };
            const result = onChange(modelFields);
            value = result?.remarques ?? value;
          }
          if (errors.remarques?.hasError) {
            runValidationTasks("remarques", value);
          }
          setRemarques(value);
        }}
        onBlur={() => runValidationTasks("remarques", remarques)}
        errorMessage={errors.remarques?.errorMessage}
        hasError={errors.remarques?.hasError}
        {...getOverrideProps(overrides, "remarques")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || aerodromeStatusModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap={tokens.space.xs.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || aerodromeStatusModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
