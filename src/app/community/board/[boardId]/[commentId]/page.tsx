import { Suspense } from 'react';

import { getCommentDetail } from '@/apis';
import { BOARD_PATH } from '@/constants';
import { AddComment } from '@/pageContainer';

interface Params {
  params: Promise<{
    commentId: string;
    boardId: string;
  }>;
}

const AddCommentPage: React.FC<Params> = async (props) => {
  const params = await props.params;

  const { commentId, boardId } = params;

  const commentDetail = await getCommentDetail(BOARD_PATH, commentId, boardId);

  return (
    <Suspense>
      <AddComment initialData={commentDetail} commentId={commentId} />
    </Suspense>
  );
};

export default AddCommentPage;
