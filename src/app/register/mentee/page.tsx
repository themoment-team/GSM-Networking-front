import { redirect } from 'next/navigation';

import { getMyMenteeInfo } from '@/apis';
import { MenteeRegister } from '@/pageContainer';

const MENTEE_REGISTER_PATH = '/register/mentee' as const;

const Mentee = async () => {
  const myInfo = await getMyMenteeInfo('/', MENTEE_REGISTER_PATH);

  // 내 멘티 정보가 있다면, 접근 불가
  if (myInfo?.generation) return redirect(`/`);

  return <MenteeRegister />;
};

export default Mentee;
