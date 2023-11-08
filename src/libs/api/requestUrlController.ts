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
  postCreateMentor: () => '/mentor',
  getMentorList: () => '/mentor',
};

export const tempMentorUrl = {
  getTempMentor: (userName: string) => `/temp-mentor/search/${userName}`,
};
