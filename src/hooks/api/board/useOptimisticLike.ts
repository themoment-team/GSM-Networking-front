'use client';

import { useState } from 'react';

import { toast } from 'react-toastify';

import { usePostLikeCount } from '@/hooks';
import type { LikeContextType } from '@/types';

export const useOptimisticLike = (
  boardId: number,
  initialLikeCount: number,
  initialIsLike: boolean,
  refetch: () => void
) => {
  const [optimisticLikeCount, setOptimisticLikeCount] =
    useState(initialLikeCount);
  const [optimisticIsLike, setOptimisticIsLike] = useState(initialIsLike);

  const { mutate: postMutate } = usePostLikeCount(boardId, {
    onMutate: async (): Promise<LikeContextType> => {
      setOptimisticLikeCount((prev) =>
        optimisticIsLike ? prev - 1 : prev + 1
      );
      setOptimisticIsLike((prev) => !prev);

      return {
        previousLikeCount: optimisticLikeCount,
        previousIsLike: optimisticIsLike,
      };
    },
    onError: (err, variables, context) => {
      const contextData = context;
      if (contextData) {
        setOptimisticLikeCount(contextData.previousLikeCount);
        setOptimisticIsLike(contextData.previousIsLike);
      }
      toast.error('좋아요 업데이트에 실패했습니다.');
    },
    onSuccess: () => {
      refetch();
    },
  });

  const uploadLike = () => {
    postMutate();
  };

  return {
    optimisticLikeCount,
    optimisticIsLike,
    uploadLike,
  };
};
