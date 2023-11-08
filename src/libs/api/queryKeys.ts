export const fileQueryKeys = {
  postUploadImage: () => ['file'],
} as const;

export const menteeQueryKeys = {
  postMenteeRole: () => ['mentee'],
} as const;

export const mentorQueryKeys = {
  postMentorRegister: () => ['mentor'],
  getMentorList: () => ['mentor', 'list'],
} as const;
