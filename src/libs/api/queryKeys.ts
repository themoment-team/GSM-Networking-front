export const fileQueryKeys = {
  postUploadImage: () => ['file'],
} as const;

export const menteeQueryKeys = {
  postChangeMenteeToMentor: () => ['mentee'],
} as const;

export const mentorQueryKeys = {
  postCreateMentor: () => ['mentor'],
  getMentorList: () => ['mentor', 'list'],
} as const;
