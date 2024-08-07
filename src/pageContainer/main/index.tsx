'use client';

import { useState } from 'react';

import * as S from './style';

import { /*MapButton,*/ PopupList } from '@/components';
import { Header, MentorList } from '@/components';
import { useGetMyMentorInfo, useGetMyMenteeInfo } from '@/hooks';
import type {
  WorkerType,
  GenerationType,
  PositionType,
  MentorInfoType,
  MenteeType,
} from '@/types';

interface Props {
  initMentorList: WorkerType[];
  defaultMyInfo?: MentorInfoType | null;
  defaultMyMenteeInfo?: MenteeType | null;
}

const MainPage: React.FC<Props> = ({
  initMentorList,
  defaultMyInfo,
  defaultMyMenteeInfo,
}) => {
  const [selectedGeneration, setSelectedGeneration] =
    useState<GenerationType>(null);
  const [selectedPosition, setSelectedPosition] = useState<PositionType | null>(
    null
  );
  const [keyword, setKeyword] = useState<string>('');
  // const { push } = useRouter();

  useGetMyMentorInfo({
    initialData: defaultMyInfo,
  });

  useGetMyMenteeInfo({
    initialData: defaultMyMenteeInfo,
  });

  const clearList = () => {
    setSelectedGeneration(null);
    setKeyword('');
    setSelectedPosition(null);
  };

  // const handleBtnClick = () => push('/chat/list');

  return (
    <>
      <PopupList />
      <Header clearList={clearList} />
      <S.Container>
        <MentorList
          initWorkerList={initMentorList}
          keyword={keyword}
          selectedGeneration={selectedGeneration}
          selectedPosition={selectedPosition}
          setKeyword={setKeyword}
          setSelectedGeneration={setSelectedGeneration}
          setSelectedPosition={setSelectedPosition}
        />
        {/* <S.ChatListShiftButton onClick={handleBtnClick}>
          <ChatListShiftIcon />
        </S.ChatListShiftButton> */}
        {/* <MapButton /> */}
      </S.Container>
    </>
  );
};

export default MainPage;
