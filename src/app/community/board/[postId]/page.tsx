import { PostDetail } from '@/pageContainer';

interface Params {
  params: {
    postId: string;
  };
}

const PostDetailPage: React.FC<Params> = () => <PostDetail initialData={[]} />;

export default PostDetailPage;
