import type { ProfileType } from '.';

export interface AuthorType extends ProfileType {
  id: number;
  phoneNumber: string;
}
