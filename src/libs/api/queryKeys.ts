export const fileQueryKeys = {
  postUploadImage: () => ['file'],
} as const;

export const menteeQueryKeys = {
  postMenteeRole: () => ['mentee'],
} as const;

export const mentorQueryKeys = {
  postCreateMentor: () => ['mentor'],
  getMentorList: () => ['mentor', 'list'],
  deleteMyMentorData: () => ['mentor', 'my'],
} as const;
