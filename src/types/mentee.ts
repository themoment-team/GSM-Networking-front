export interface MenteeRequestType {
  name: string;
  email: string;
  generation: number;
  phoneNumber: string;
  profileUrl?: string;
}

export interface MenteeType extends MenteeRequestType {
  defaultImgNumber: number;
  id: number;
}
