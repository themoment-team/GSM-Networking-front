export const authUrl = {
  loginLink: () => '/auth/oauth2/authorization/google',
  patchRefresh: () => '/auth/reissue',
  getLogout: () => '/auth/logout',
};

export const fileUrl = {
  postUploadImage: () => '/file',
};

export const menteeUrl = {
  postMenteeRole: () => '/mentee',
};

export const mentorUrl = {
  postMentorRegister: () => '/mentor',
  getMentorList: () => '/mentor',
  deleteMyMentorData: () => '/mentor/my',
};

export const tempMentorUrl = {
  getSearchTempMentor: (userName: string) => `/temp-mentor/search/${userName}`,
};
