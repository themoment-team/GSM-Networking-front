/**@jsxImportSource @emotion/react */
'use client';

import * as S from './style';

import { useGetCommentDetail } from '@/hooks';

interface Props {
  replyCommentId: string;
}

const Reply: React.FC<Props> = ({ replyCommentId }) => {
  const { data: repliedComment } = useGetCommentDetail(replyCommentId);
  const repliedUser = repliedComment?.author ?? {
    generation: 0,
    name: '알 수 없음.',
  };

  return (
    <S.Mention>@{`${repliedUser.generation}기 ${repliedUser.name}`} </S.Mention>
  );
};

export default Reply;
