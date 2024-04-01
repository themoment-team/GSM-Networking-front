import { AddComment } from '@/pageContainer';

interface Params {
  params: {
    commentId: string;
  };
}

const AddCommentPage: React.FC<Params> = () => <AddComment initialData={[]} />;

export default AddCommentPage;
