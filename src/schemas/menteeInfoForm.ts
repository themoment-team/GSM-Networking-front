import { mentorInfoFormSchema } from '@/schemas';

export const menteeInfoFormSchema = mentorInfoFormSchema.omit({ snsUrl: true });
