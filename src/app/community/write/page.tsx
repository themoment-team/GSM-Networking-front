import { redirect } from 'next/navigation';

import { CommunityWrite } from '@/pageContainer';
import { isMyBoard } from '@/utils';

interface Params {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}

const CommunityWritePage: React.FC<Params> = async (props) => {
  const searchParams = await props.searchParams;
  const boardId = searchParams?.boardid;

  if (boardId) {
    const [isMy, board] = await isMyBoard(boardId);
    if (isMy) {
      return <CommunityWrite prevBoard={board} />;
    }
    redirect('/community/write');
  }

  return <CommunityWrite />;
};
export default CommunityWritePage;
