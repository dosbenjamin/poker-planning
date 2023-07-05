import { Collections, type ParticipantsResponse } from 'shared';
import { ReadManyParticipantsInputSchema, ReadManyParticipantsOutputSchema } from 'features/participants';
import { pocketbase } from 'lib/pocketbase/client';

export const readManyParticipants = async (participantIds: unknown[]): Promise<ReadManyParticipantsOutputSchema> => {
  const validatedParticipantIds = ReadManyParticipantsInputSchema.parse(participantIds);

  const participants = await pocketbase.collection(Collections.Participants).getFullList<ParticipantsResponse>({
    filter: validatedParticipantIds.map((participantId) => `id = '${participantId}'`).join(' || '),
  });

  return ReadManyParticipantsOutputSchema.parse(participants);
};
