import { redirect } from 'next/navigation';

import { GwangjangWite } from '@/pageContainer';
import { isMyBoard } from '@/utils';

interface Params {
  searchParams?: { [key: string]: string | undefined };
}

const GwangjangWritePage: React.FC<Params> = async ({ searchParams }) => {
  const boardId = searchParams?.boardid;

  if (boardId) {
    const [isMy, board] = await isMyBoard(boardId);
    if (isMy) {
      return <GwangjangWite prevBoard={board} />;
    }
    redirect('/community/write/gwangjang');
  }

  return <GwangjangWite />;
};
export default GwangjangWritePage;
