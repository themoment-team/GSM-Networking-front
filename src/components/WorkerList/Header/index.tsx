import * as S from './style';

import { FilterButton } from '@/components';
import type { GenerationType } from '@/types';

interface Props {
  selectedGeneration: GenerationType;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const WorkerListHeader: React.FC<Props> = ({
  selectedGeneration,
  setIsShowFilterModal,
}) => (
  <S.Header>
    <S.Title>취업자 리스트 조회</S.Title>
    <FilterButton
      selectedGeneration={selectedGeneration}
      onClick={() => setIsShowFilterModal(true)}
    />
  </S.Header>
);

export default WorkerListHeader;
