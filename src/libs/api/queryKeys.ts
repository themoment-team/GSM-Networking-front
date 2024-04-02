export const boardQueryKeys = {
  getBoardDetail: (boardId: string) => ['board', boardId],
  getBoardList: () => ['board', 'post', 'list'],
  postBoardList: () => ['board', 'post', 'list'],
};

export const commentQueryKeys = {
  getCommentDetail: (commentId: string) => ['comment', commentId],
};

export const fileQueryKeys = {
  postUploadFile: () => ['file'],
} as const;

export const gwangyaQueryKeys = {
  getGwangyaPostList: () => ['gwangya', 'post', 'list'],
  postGwangyaContent: () => ['gwangya', 'post', 'content'],
};

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
};

export const userQueryKeys = {
  postProfileImgUrl: () => ['user', 'profile'],
};
