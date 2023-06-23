/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AerodromeStatus } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AerodromeStatusUpdateFormInputValues = {
    piste_active?: number;
    arff?: string;
    act_aviaire_locale?: string;
    sar_statut?: string;
    sar_statut_ytr?: string;
    champ_tir_9mm?: string;
    champ_planeur?: string;
    circuit?: string;
    act_aviaire_migratoire?: string;
    base_rescue?: string;
    sar_statut_yzx?: string;
    grande_anse?: string;
    remarques?: string;
};
export declare type AerodromeStatusUpdateFormValidationValues = {
    piste_active?: ValidationFunction<number>;
    arff?: ValidationFunction<string>;
    act_aviaire_locale?: ValidationFunction<string>;
    sar_statut?: ValidationFunction<string>;
    sar_statut_ytr?: ValidationFunction<string>;
    champ_tir_9mm?: ValidationFunction<string>;
    champ_planeur?: ValidationFunction<string>;
    circuit?: ValidationFunction<string>;
    act_aviaire_migratoire?: ValidationFunction<string>;
    base_rescue?: ValidationFunction<string>;
    sar_statut_yzx?: ValidationFunction<string>;
    grande_anse?: ValidationFunction<string>;
    remarques?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AerodromeStatusUpdateFormOverridesProps = {
    AerodromeStatusUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    piste_active?: PrimitiveOverrideProps<TextFieldProps>;
    arff?: PrimitiveOverrideProps<TextFieldProps>;
    act_aviaire_locale?: PrimitiveOverrideProps<TextFieldProps>;
    sar_statut?: PrimitiveOverrideProps<TextFieldProps>;
    sar_statut_ytr?: PrimitiveOverrideProps<TextFieldProps>;
    champ_tir_9mm?: PrimitiveOverrideProps<TextFieldProps>;
    champ_planeur?: PrimitiveOverrideProps<TextFieldProps>;
    circuit?: PrimitiveOverrideProps<TextFieldProps>;
    act_aviaire_migratoire?: PrimitiveOverrideProps<TextFieldProps>;
    base_rescue?: PrimitiveOverrideProps<TextFieldProps>;
    sar_statut_yzx?: PrimitiveOverrideProps<TextFieldProps>;
    grande_anse?: PrimitiveOverrideProps<TextFieldProps>;
    remarques?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AerodromeStatusUpdateFormProps = React.PropsWithChildren<{
    overrides?: AerodromeStatusUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aerodromeStatus?: AerodromeStatus;
    onSubmit?: (fields: AerodromeStatusUpdateFormInputValues) => AerodromeStatusUpdateFormInputValues;
    onSuccess?: (fields: AerodromeStatusUpdateFormInputValues) => void;
    onError?: (fields: AerodromeStatusUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AerodromeStatusUpdateFormInputValues) => AerodromeStatusUpdateFormInputValues;
    onValidate?: AerodromeStatusUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AerodromeStatusUpdateForm(props: AerodromeStatusUpdateFormProps): React.ReactElement;
