import { PostDetail } from '@/pageContainer';

interface Params {
  params: {
    boardId: string;
  };
}

const PostDetailPage: React.FC<Params> = ({ params: { boardId } }) => (
  <PostDetail initialData={[]} />
);

export default PostDetailPage;
