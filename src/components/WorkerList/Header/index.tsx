import * as S from './style';

import { FilterButton, SearchBar } from '@/components';
import type { GenerationType } from '@/types';

interface Props {
  selectedGeneration: GenerationType;
  keyword: string;
  isShowFilterModal: boolean;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const WorkerListHeader: React.FC<Props> = ({
  selectedGeneration,
  keyword,
  isShowFilterModal,
  setKeyword,
  setIsShowFilterModal,
}) => (
  <S.Header>
    <SearchBar keyword={keyword} setKeyword={setKeyword} />
    <FilterButton
      selectedGeneration={selectedGeneration}
      onClick={() =>
        setIsShowFilterModal((isShowFilterModal) => !isShowFilterModal)
      }
      isActive={isShowFilterModal}
    />
  </S.Header>
);

export default WorkerListHeader;
