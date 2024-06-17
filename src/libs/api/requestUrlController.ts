export const authUrl = {
  loginLink: () => '/auth/oauth2/authorization/google',
  patchRefresh: () => '/auth/reissue',
  getLogout: () => '/auth/logout',
} as const;

export const boardUrl = {
  getBoardDetail: (boardId: string) => `/board/${boardId}`,
  getBoardList: (cursorId: number) => `/board?cursorId=${cursorId}&pageSize=8`,
  getBoard: (cursorId: number) => `/board?cursorId=${cursorId}&pageSize=8`,
  postBoardContent: () => '/board',
  patchBoard: (boardId: string) => `/board/${boardId}`,
} as const;

export const commentUrl = {
  getCommentDetail: (commentId: string) => `/comment/${commentId}`,
  postComment: () => `/comment`,
} as const;

export const fileUrl = {
  postUploadFile: () => '/file',
} as const;

export const gwangyaUrl = {
  getGwangyaPostList: (gwangyaId: number) =>
    `/gwangya?pageSize=20&gwangyaId=${gwangyaId}`,
  postGwangyaContent: () => `/gwangya`,
  getGwangyaToken: () => `/gwangya/token`,
} as const;

export const likeUrl = {
  postLikeCount: (boardId: number) => `/like/${boardId}`,
};

export const menteeUrl = {
  postMenteeRegister: () => '/mentee',
  patchMenteeAuthority: () => '/mentee/update',
  getMyMenteeInfo: () => '/mentee/my',
} as const;

export const mentorUrl = {
  postMentorRegister: () => '/mentor',
  getMentorList: () => '/mentor',
  putMentorUpdate: () => '/mentor/my',
  deleteMyMentorData: () => '/mentor/my',
  getMyInfo: () => '/mentor/my',
} as const;

export const popupUrl = {
  getPopupList: () => '/popup',
} as const;

export const tempMentorUrl = {
  getSearchTempMentor: (userName: string) => `/temp-mentor/search/${userName}`,
  getTempMentorInfo: (id: number) => `/temp-mentor/${id}`,
  deleteTempMentor: (id: number) => `/temp-mentor/${id}`,
} as const;

export const userUrl = {
  patchProfileNumber: () => '/user/profile-number',
  postProfileImgUrl: () => `/user/profile-url`,
  isTeacher: () => `/user/is-teacher`,
} as const;
