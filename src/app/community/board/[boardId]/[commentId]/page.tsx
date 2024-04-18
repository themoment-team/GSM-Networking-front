import { getCommentDetail } from '@/apis';
import { AddComment } from '@/pageContainer';

interface Params {
  params: {
    commentId: string;
  };
}

const AddCommentPage: React.FC<Params> = async ({ params: { commentId } }) => {
  const commentDetail = await getCommentDetail('/community/board', commentId);

  return <AddComment initialData={commentDetail} commentId={commentId} />;
};

export default AddCommentPage;
