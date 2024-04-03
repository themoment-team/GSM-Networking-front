import { getBoardDetail } from '@/apis';
import { BoardDetail } from '@/pageContainer';

interface Params {
  params: {
    boardId: string;
  };
}

const BoardDetailPage: React.FC<Params> = async ({ params: { boardId } }) => {
  const boardDetail = await getBoardDetail('/board', boardId);

  return <BoardDetail initialData={boardDetail} boardId={boardId} />;
};

export default BoardDetailPage;
