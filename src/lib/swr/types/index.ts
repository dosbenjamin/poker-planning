import type { SWRMutationConfiguration, SWRMutationResponse } from 'swr/mutation';
import type { Key as SWRMutationKey } from 'swr';

export type SWRMutation<
  Data = unknown,
  Error = unknown,
  Key extends SWRMutationKey = SWRMutationKey,
  Argument = unknown,
> = (options?: SWRMutationConfiguration<Data, Error, Key, Argument>) => SWRMutationResponse<Data, Error, Key, Argument>;
