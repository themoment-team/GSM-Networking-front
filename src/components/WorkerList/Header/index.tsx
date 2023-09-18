import * as S from './style';

import { FilterButton, SearchBar } from '@/components';

interface Props {
  keyword: string;
  isShowFilterModal: boolean;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const WorkerListHeader: React.FC<Props> = ({
  keyword,
  isShowFilterModal,
  setKeyword,
  setIsShowFilterModal,
}) => (
  <S.Header>
    <SearchBar keyword={keyword} setKeyword={setKeyword} />
    <FilterButton
      onClick={() =>
        setIsShowFilterModal((isShowFilterModal) => !isShowFilterModal)
      }
      isActive={isShowFilterModal}
    />
  </S.Header>
);

export default WorkerListHeader;
