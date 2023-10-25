export const authUrl = {
  LoginLink: () => '/auth/oauth2/authorization/google',
  patchRefresh: () => '/auth/reissue',
  getLogout: () => '/auth/logout',
};

export const fileUrl = {
  postUploadImage: () => '/file',
};

export const menteeUrl = {
  postChangeMenteeToMentor: () => '/mentee',
};

export const mentorUrl = {
  postCreateMentor: () => '/mentor',
  getMentorList: () => '/mentor/list',
};
