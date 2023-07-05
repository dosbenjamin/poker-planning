import useSWR, { type SWRConfiguration, type SWRResponse } from 'swr';
import type { ReadManyParticipantsOutputSchema } from 'features/participants';
import { queryKeys } from 'shared';
import { readManyParticipants } from 'features/participants/client';

export const useReadManyParticipants = (
  participantIds?: string[],
  config?: SWRConfiguration<ReadManyParticipantsOutputSchema, void, typeof readManyParticipants>,
): SWRResponse<
  ReadManyParticipantsOutputSchema,
  void,
  SWRConfiguration<ReadManyParticipantsOutputSchema, void, typeof readManyParticipants>
> => {
  return useSWR(
    Array.isArray(participantIds) ? queryKeys.getReadManyParticipants(participantIds) : null,
    ([, ...participantIds]) => readManyParticipants(participantIds),
    // @ts-expect-error overload
    config,
  );
};
