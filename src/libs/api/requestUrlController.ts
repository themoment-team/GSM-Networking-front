export const authUrl = {
  loginLink: () => '/auth/oauth2/authorization/google',
  patchRefresh: () => '/auth/reissue',
  getLogout: () => '/auth/logout',
  getMyToken: () => '/auth/my-token',
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
  getMentorInfo: () => '/mentor/my',
};

export const tempMentorUrl = {
  getSearchTempMentor: (userName: string) => `/temp-mentor/search/${userName}`,
  getTempMentorInfo: (id: number) => `/temp-mentor/${id}`,
  deleteTempMentor: (id: number) => `/temp-mentor/${id}`,
};

export const userUrl = {
  postProfileImgUrl: () => `/user/profile-url`,
};
