export const boardQueryKeys = {
  getBoardDetail: (boardId: string) => ['board', boardId],
  postBoardContent: () => ['board', 'content'],
  getBoardList: () => ['board', 'post', 'list'],
} as const;

export const commentQueryKeys = {
  getCommentDetail: (commentId: string) => ['comment', commentId],
  postComment: () => ['comment', 'create'],
} as const;

export const etcQueryKeys = {
  getPopupList: () => ['popup', 'list'],
} as const;

export const fileQueryKeys = {
  postUploadFile: () => ['file'],
} as const;

export const gwangyaQueryKeys = {
  getGwangyaPostList: () => ['gwangya', 'post', 'list'],
  postGwangyaContent: () => ['gwangya', 'post', 'content'],
} as const;

export const menteeQueryKeys = {
  postMenteeRegister: () => ['mentee', 'register'],
  patchMenteeAuthority: () => ['mentee', 'authority'],
  getMyMenteeInfo: () => ['mentee', 'my', 'info'],
} as const;

export const mentorQueryKeys = {
  postMentorRegister: () => ['mentor'],
  putMentorUpdate: () => ['mentor', 'update'],
  getMentorList: () => ['mentor', 'list'],
  deleteMyMentorData: () => ['mentor', 'my'],
  getMyInfo: () => ['mentor', 'my', 'info'],
} as const;

export const tempMentorQueryKeys = {
  getSearchTempMentor: (keyword: string) => ['temp', 'mentor', keyword],
  deleteTempMentor: () => ['temp', 'mentor', 'delete'],
} as const;

export const userQueryKeys = {
  postProfileImgUrl: () => ['user', 'profile'],
  getIsTeacher: () => ['user', 'teacher'],
} as const;
