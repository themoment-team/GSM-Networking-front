import { getBoardDetail } from '@/apis';
import { BOARD_PATH } from '@/constants';
import { BoardDetail } from '@/pageContainer';

interface Params {
  params: {
    boardId: string;
  };
}

const BoardDetailPage: React.FC<Params> = async ({ params: { boardId } }) => {
  const boardDetail = await getBoardDetail(BOARD_PATH, boardId);

  return <BoardDetail initialData={boardDetail} boardId={boardId} />;
};

export default BoardDetailPage;
