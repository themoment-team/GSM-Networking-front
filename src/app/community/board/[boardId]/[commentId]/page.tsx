import { AddComment } from '@/pageContainer';

interface Params {
  params: {
    commentId: string;
  };
}

const AddCommentPage: React.FC<Params> = () => {
  const commentDetail = await getBoardDetail('/board', boardId);

  return <AddComment initialData={commentDetail} />;
};

export default AddCommentPage;
