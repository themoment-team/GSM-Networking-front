import { cookies } from 'next/headers';

import { tempMentorUrl } from '@/libs';
import { MentorRegister } from '@/pageContainer';
import type { TempMentorType } from '@/types';

import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: '멘토 등록',
  description: '멘토 등록 페이지입니다.',
};

interface Props {
  searchParams?: { id: number };
}

const MentorRegisterPage: NextPage<Props> = async ({ searchParams }) => {
  const id = Number(searchParams?.id);

  const mentorInfo = await getTempMentorInfo(Number(id));

  console.log(data);

  return <MentorRegister tempMentorId={} mentorInfo={mentorInfo} />;
};

const getTempMentorInfo = async (
  id: number
): Promise<TempMentorType | null> => {
  const accessToken = cookies().get('accessToken')?.value;

  try {
    const response = await fetch(
      new URL(
        `/api/v1${tempMentorUrl.getTempMentorInfo(id)}`,
        process.env.BASE_URL
      ),
      {
        method: 'GET',
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
      }
    );

    console.log(response);

    if (response.status === 401) {
      throw new Error('accessToken이 만료되었습니다.');
    }

    if (!response.ok) {
      return null;
    }

    const tempMentorInfo = await response.json();

    return tempMentorInfo;
  } catch (error) {
    // return redirect('/auth/refresh?redirect=/register/mentor');
  }
};

export default MentorRegisterPage;
