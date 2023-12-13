import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { gwangyaUrl } from '@/libs';
import { Gwangya } from '@/pageContainer';
import type { GwangyaPostType } from '@/types';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '광야',
  description: '익명으로 자유롭게 소통할 수 있는 광소마의 넓은 들판입니다.',
};

const GwangyaPage = async () => {
  const postList = await getGwangyaPostList();

  return <Gwangya initialData={postList} />;
};

const getGwangyaPostList = async (): Promise<GwangyaPostType[]> => {
  const gwangyaToken = cookies().get('gwangyaToken')?.value;

  if (!gwangyaToken)
    return redirect('/auth/refresh/gwangya?redirect=/community/gwangya');

  const response = await fetch(
    new URL(
      `/api/v1${gwangyaUrl.getGwangyaPostList(0)}`,
      process.env.NEXT_PUBLIC_API_BASE_URL
    ),
    { headers: { GwangyaToken: gwangyaToken } }
  );

  if (response.status === 401) {
    return redirect('/auth/refresh/gwangya?redirect=/community/gwangya');
  }

  if (!response.ok) {
    return redirect('/auth/signin');
  }

  const postList: GwangyaPostType[] = await response.json();

  return postList;
};

export default GwangyaPage;
