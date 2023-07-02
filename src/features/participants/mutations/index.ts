import { Collections, type ParticipantsRecord, type ParticipantsResponse } from 'shared';
import { CreateParticipantInputSchema, CreateParticipantOutputSchema } from 'features/participants';
import { pocketbase } from 'lib/pocketbase/server';

export const createParticipant = async (
  values: Record<keyof ParticipantsRecord, unknown>,
): Promise<CreateParticipantOutputSchema> => {
  const validatedValues = CreateParticipantInputSchema.parse(values);

  const participant = await pocketbase
    .collection(Collections.Participants)
    .create<ParticipantsResponse>(validatedValues);

  return CreateParticipantOutputSchema.parse(participant);
};
