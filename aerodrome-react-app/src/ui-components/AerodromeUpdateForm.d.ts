/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AerodromeUpdateFormInputValues = {
    Field0?: string;
};
export declare type AerodromeUpdateFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AerodromeUpdateFormOverridesProps = {
    AerodromeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type AerodromeUpdateFormProps = React.PropsWithChildren<{
    overrides?: AerodromeUpdateFormOverridesProps | undefined | null;
} & {
    initialData?: AerodromeUpdateFormInputValues;
    onSubmit: (fields: AerodromeUpdateFormInputValues) => void;
    onChange?: (fields: AerodromeUpdateFormInputValues) => AerodromeUpdateFormInputValues;
    onValidate?: AerodromeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AerodromeUpdateForm(props: AerodromeUpdateFormProps): React.ReactElement;
