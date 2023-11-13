import { MentorRegister } from '@/pageContainer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '멘토 등록',
  description: '멘토 등록 페이지입니다.',
};

export default function MentorRegisterPage() {
  return <MentorRegister />;
}
