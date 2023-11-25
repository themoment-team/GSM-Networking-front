export const authUrl = {
  loginLink: () => '/auth/oauth2/authorization/google',
  patchRefresh: () => '/auth/reissue',
  getLogout: () => '/auth/logout',
};

export const fileUrl = {
  postUploadFile: () => '/file',
};

export const gwangyaUrl = {
  postGwangyaContent: () => `${process.env.NEXT_PUBLIC_API_BASE_URL}/gwangya`,
  getGwangyaPost: () => `${process.env.NEXT_PUBLIC_API_BASE_URL}/gwangya`,
  getGwangyaToken: () =>
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/gwangya/token`,
};

export const menteeUrl = {
  postMenteeRole: () => '/mentee',
};

export const mentorUrl = {
  postMentorRegister: () => '/mentor',
  getMentorList: () => '/mentor',
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
};
