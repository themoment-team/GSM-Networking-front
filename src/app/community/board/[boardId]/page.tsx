import { getBoardDetail } from '@/apis';
import { BOARD_PATH } from '@/constants';
import { BoardDetail } from '@/pageContainer';

interface Params {
  params: Promise<{ boardId: string }>;
}

const BoardDetailPage: React.FC<Params> = async (props) => {
  const params = await props.params;

  const { boardId } = params;

  const boardDetail = await getBoardDetail(BOARD_PATH, boardId);

  return <BoardDetail initialData={boardDetail} boardId={boardId} />;
};

export default BoardDetailPage;
