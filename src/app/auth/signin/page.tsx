import { SignIn } from '@/pageContainer';

import type { Metadata } from 'next';

export default function SignInPage() {
  return <SignIn />;
}

export const metadata: Metadata = {
  title: '로그인',
  description: '로그인 페이지 입니다.',
  openGraph: {
    title: '로그인',
    description: '로그인 페이지 입니다.',
  },
};
