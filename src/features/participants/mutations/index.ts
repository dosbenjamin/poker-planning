import { Collections, type ParticipantsRecord, type ParticipantsResponse } from 'shared';
import { CreateParticipantInputSchema, CreateParticipantOutputSchema } from 'features/participants';
import { pocketbase } from 'lib/pocketbase/server';

export const createParticipant = async (
  participantValues: Record<keyof ParticipantsRecord, unknown>,
): Promise<CreateParticipantOutputSchema> => {
  const validatedParticipantValues = CreateParticipantInputSchema.parse(participantValues);

  const participant = await pocketbase
    .collection(Collections.Participants)
    .create<ParticipantsResponse>(validatedParticipantValues);

  return CreateParticipantOutputSchema.parse(participant);
};
