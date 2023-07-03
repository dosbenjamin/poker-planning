import { Collections, type ParticipantsResponse } from 'shared';
import { ReadManyParticipantsInputSchema, ReadManyParticipantsOutputSchema } from 'features/participants';
import { pocketbase } from 'lib/pocketbase/client';

export const readManyParticipants = async (ids: unknown[]): Promise<ReadManyParticipantsOutputSchema> => {
  const validatedIds = ReadManyParticipantsInputSchema.parse(ids);

  const participants = await pocketbase.collection(Collections.Participants).getFullList<ParticipantsResponse>({
    filter: validatedIds.map((id) => `id = '${id}'`).join(' || '),
  });

  return ReadManyParticipantsOutputSchema.parse(participants);
};
