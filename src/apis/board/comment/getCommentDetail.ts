import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { commentUrl } from '@/libs';
import type { CommentType } from '@/types';

const AUTH_REFRESH_PATH = '/auth/refresh' as const;

/**
 * commentId에 따른 comment 정보를 조회합니다.
 *
 * @returns comment 정보를 반환합니다. comment 정보가 없다면 null을 반환합니다.
 */
export const getCommentDetail = async (
  redirectUrl: string,
  commentId: string,
  boardId: string
): Promise<CommentType | null> => {
  const accessToken = (await cookies()).get('accessToken')?.value;

  if (!accessToken) {
    return redirect(
      `/auth/refresh?redirect=${redirectUrl}/${boardId}/${commentId}`
    );
  }

  const response = await fetch(
    new URL(
      `/api/v1${commentUrl.getCommentDetail(commentId)}`,
      process.env.BASE_URL
    ),
    {
      method: 'GET',
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  const commentDetail = await response.json();
  const isUnauthorized = response.status === 401;
  const isNotFound = response.status === 404;

  if (isNotFound) {
    return null;
  }

  if (isUnauthorized) {
    return redirect(
      `${AUTH_REFRESH_PATH}?redirect=${redirectUrl}/${boardId}/${commentId}}`
    );
  }

  if (!response.ok) {
    return redirect(redirectUrl);
  }

  return commentDetail;
};
