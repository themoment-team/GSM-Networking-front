import * as S from './style';

import { FilterButton, SearchBar } from '@/components';

interface Props {
  keyword: string;
  isShowFilterModal: boolean;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MentorListHeader: React.FC<Props> = ({
  keyword,
  isShowFilterModal,
  setKeyword,
  setIsShowFilterModal,
}) => (
  <S.Header>
    <SearchBar
      keyword={keyword}
      setKeyword={setKeyword}
      placeholder='찾고 싶은 사람, 전공, 회사명 등을 검색해보세요.'
    />
    <FilterButton
      onClick={() =>
        setIsShowFilterModal((isShowFilterModal) => !isShowFilterModal)
      }
      isActive={isShowFilterModal}
    />
  </S.Header>
);

export default MentorListHeader;
