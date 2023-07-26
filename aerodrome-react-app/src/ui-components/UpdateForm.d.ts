/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UpdateFormInputValues = {};
export declare type UpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateFormOverridesProps = {
    UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type UpdateFormProps = React.PropsWithChildren<{
    overrides?: UpdateFormOverridesProps | undefined | null;
} & {
    initialData?: UpdateFormInputValues;
    onSubmit: (fields: UpdateFormInputValues) => void;
    onChange?: (fields: UpdateFormInputValues) => UpdateFormInputValues;
    onValidate?: UpdateFormValidationValues;
} & React.CSSProperties>;
export default function UpdateForm(props: UpdateFormProps): React.ReactElement;
