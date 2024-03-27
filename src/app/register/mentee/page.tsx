import { redirect } from 'next/navigation';

import { getMyMenteeInfo } from '@/apis';
import { MenteeRegister } from '@/pageContainer';

const Mentee = async () => {
  const myInfo = await getMyMenteeInfo('/');

  if (myInfo) return redirect(`/`);

  return <MenteeRegister />;
};

export default Mentee;
