import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAerodromeStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AerodromeStatus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly piste_active?: number | null;
  readonly arff?: string | null;
  readonly act_aviaire_locale?: string | null;
  readonly sar_statut?: string | null;
  readonly sar_statut_ytr?: string | null;
  readonly champ_tir_9mm?: string | null;
  readonly champ_planeur?: string | null;
  readonly circuit?: string | null;
  readonly act_aviaire_migratoire?: string | null;
  readonly base_rescue?: string | null;
  readonly sar_statut_yzx?: string | null;
  readonly grande_anse?: string | null;
  readonly remarques?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAerodromeStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AerodromeStatus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly piste_active?: number | null;
  readonly arff?: string | null;
  readonly act_aviaire_locale?: string | null;
  readonly sar_statut?: string | null;
  readonly sar_statut_ytr?: string | null;
  readonly champ_tir_9mm?: string | null;
  readonly champ_planeur?: string | null;
  readonly circuit?: string | null;
  readonly act_aviaire_migratoire?: string | null;
  readonly base_rescue?: string | null;
  readonly sar_statut_yzx?: string | null;
  readonly grande_anse?: string | null;
  readonly remarques?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AerodromeStatus = LazyLoading extends LazyLoadingDisabled ? EagerAerodromeStatus : LazyAerodromeStatus

export declare const AerodromeStatus: (new (init: ModelInit<AerodromeStatus>) => AerodromeStatus) & {
  copyOf(source: AerodromeStatus, mutator: (draft: MutableModel<AerodromeStatus>) => MutableModel<AerodromeStatus> | void): AerodromeStatus;
}