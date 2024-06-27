export interface LikeContextType {
  previousLikeCount: number;
  previousIsLike: boolean;
}

export interface LikeRequestType {
  boardId: number;
}

export interface LikeType {
  currentStatus: boolean;
}
