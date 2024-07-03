export interface PatchProfileNumberType {
  profileNumber: number;
}

export interface PostProfileImgType {
  profileUrl: string;
}

export interface ProfileType {
  name: string;
  generation: number;
  profileUrl?: string;
  defaultImgNumber: number;
}
