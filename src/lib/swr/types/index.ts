import type { SWRMutationConfiguration, SWRMutationResponse } from 'swr/mutation';
import type { Key as SWRMutationKey } from 'swr';

export type SWRMutationHook<
  Data = unknown,
  Error = unknown,
  Key extends SWRMutationKey = SWRMutationKey,
  Argument = unknown,
> = (
  key?: Key,
  options?: SWRMutationConfiguration<Data, Error, Key, Argument>,
) => SWRMutationResponse<Data, Error, Key, Argument>;
