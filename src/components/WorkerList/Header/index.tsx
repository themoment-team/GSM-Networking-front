import * as S from './style';

import { FilterButton } from '@/components';

interface Props {
  isShowFilterModal: boolean;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const WorkerListHeader: React.FC<Props> = ({
  isShowFilterModal,
  setIsShowFilterModal,
}) => (
  <S.Header>
    <S.Title>취업자 리스트 조회</S.Title>
    <FilterButton
      onClick={() =>
        setIsShowFilterModal((isShowFilterModal) => !isShowFilterModal)
      }
      isActive={isShowFilterModal}
    />
  </S.Header>
);

export default WorkerListHeader;
