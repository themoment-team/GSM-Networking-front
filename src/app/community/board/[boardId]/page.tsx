import { getBoardDetail } from '@/apis';
import { BoardDetail } from '@/pageContainer';
import type { BoardType } from '@/types';

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

const addTemporaryImgNumber = (board: BoardType | null) => {
  if (!board) return null;

  const newBoard = {
    ...board,
    temporaryImgNumber: Math.floor(Math.random() * 5),
  };
  newBoard.comments = newBoard.comments.map((comment) => ({
    ...comment,
    temporaryImgNumber: Math.floor(Math.random() * 5),
  }));

  return newBoard;
};
