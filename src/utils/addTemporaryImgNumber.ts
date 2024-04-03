import type { BoardType, CommentType } from '@/types';

const addRandomValue = (object: BoardType | CommentType) => {
  object.author.temporaryImgNumber = Math.floor(Math.random() * 5);
};

const addTemporaryImgNumber = (board: BoardType | null | undefined) => {
  if (!board) return null;

  addRandomValue(board);
  board.comments.forEach((comment) => addRandomValue(comment));

  return board;
};

export default addTemporaryImgNumber;
