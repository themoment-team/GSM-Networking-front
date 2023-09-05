import * as S from './style';

import { FilterButton } from '@/components';
import type { GenerationType } from '@/types';

interface Props {
  selectedGeneration: GenerationType;
  isShowFilterModal: boolean;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const WorkerListHeader: React.FC<Props> = ({
  selectedGeneration,
  isShowFilterModal,
  setIsShowFilterModal,
}) => (
  <S.Header>
    <S.Title>취업자 리스트 조회</S.Title>
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
