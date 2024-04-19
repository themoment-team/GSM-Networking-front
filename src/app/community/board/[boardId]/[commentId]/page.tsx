import { getCommentDetail } from '@/apis';
import { BOARD_PATH } from '@/constants';
import { AddComment } from '@/pageContainer';

interface Params {
  params: {
    commentId: string;
    boardId: string;
  };
}

const AddCommentPage: React.FC<Params> = async ({
  params: { commentId, boardId },
}) => {
  const commentDetail = await getCommentDetail(BOARD_PATH, commentId, boardId);

  return <AddComment initialData={commentDetail} commentId={commentId} />;
};

export default AddCommentPage;
