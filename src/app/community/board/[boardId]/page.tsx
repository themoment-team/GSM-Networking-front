import { getBoardDetail } from '@/apis';
import { BoardDetail } from '@/pageContainer';
import type { BoardType, CommentType } from '@/types';

interface Params {
  params: {
    boardId: string;
  };
}

const BoardDetailPage: React.FC<Params> = async ({ params: { boardId } }) => {
  const boardDetail = await getBoardDetail('/board', boardId);

  return (
    <BoardDetail
      initialData={addTemporaryImgNumber(boardDetail)}
      boardId={boardId}
    />
  );
};

export default BoardDetailPage;

const addRandomValue = (object: BoardType | CommentType) => {
  object.author.temporaryImgNumber = Math.floor(Math.random() * 5);
};

const addTemporaryImgNumber = (board: BoardType | null) => {
  if (!board) return null;

  addRandomValue(board);
  board.comments.forEach((comment) => addRandomValue(comment));

  return board;
};
