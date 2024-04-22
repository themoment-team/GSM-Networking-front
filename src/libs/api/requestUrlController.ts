export const authUrl = {
  loginLink: () => '/auth/oauth2/authorization/google',
  patchRefresh: () => '/auth/reissue',
  getLogout: () => '/auth/logout',
};

export const boardUrl = {
  getBoardDetail: (boardId: string) => `/board/${boardId}`,
  getBoardList: (cursorId: number) => `/board?cursorId=${cursorId}&pageSize=8`,
  postBoardContent: () => '/board',
};

export const commentUrl = {
  getCommentDetail: (commentId: string) => `/comment/${commentId}`,
  postComment: () => `/comment`,
};

export const fileUrl = {
  postUploadFile: () => '/file',
};

export const gwangyaUrl = {
  getGwangyaPostList: (gwangyaId: number) =>
    `/gwangya?pageSize=20&gwangyaId=${gwangyaId}`,
  postGwangyaContent: () => `/gwangya`,
  getGwangyaToken: () => `/gwangya/token`,
};

export const menteeUrl = {
  postMenteeRegister: () => '/mentee',
  patchMenteeAuthority: () => '/mentee/update',
  getMyMenteeInfo: () => '/mentee/my',
};

export const mentorUrl = {
  postMentorRegister: () => '/mentor',
  getMentorList: () => '/mentor',
  putMentorUpdate: () => '/mentor/my',
  deleteMyMentorData: () => '/mentor/my',
  getMyInfo: () => '/mentor/my',
};

export const tempMentorUrl = {
  getSearchTempMentor: (userName: string) => `/temp-mentor/search/${userName}`,
  getTempMentorInfo: (id: number) => `/temp-mentor/${id}`,
  deleteTempMentor: (id: number) => `/temp-mentor/${id}`,
};

export const userUrl = {
  postProfileImgUrl: () => `/user/profile-url`,
  isTeacher: () => `/user/is-teacher`,
};
