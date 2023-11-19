export const fileQueryKeys = {
  postUploadImage: () => ['file'],
} as const;

export const menteeQueryKeys = {
  postMenteeRole: () => ['mentee'],
} as const;

export const mentorQueryKeys = {
  postMentorRegister: () => ['mentor'],
  getMentorList: () => ['mentor', 'list'],
  deleteMyMentorData: () => ['mentor', 'my'],
  getMyInfo: () => ['mentor', 'my', 'info'],
} as const;

export const tempMentorQueryKeys = {
  getSearchTempMentor: (keyword: string) => ['temp', 'mentor', keyword],
  deleteTempMentor: () => ['temp', 'mentor', 'delete'],
};
