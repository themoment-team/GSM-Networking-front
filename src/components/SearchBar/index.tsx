'use client';

import { useEffect, useState } from 'react';

const SearchBar: React.FC = ({ initWorkerList, setWorkerList }) => {
  const [searchValue, setSeaechValue] = useState('');

  useEffect(() => {
    const searched = initWorkerList.filter(
      (worker) =>
        worker.name.includes(searchValue) ||
        worker.company.name.includes(searchValue) ||
        worker.position.includes(searchValue)
    );
    setWorkerList(searched);
  }, [initWorkerList, searchValue, setWorkerList]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeaechValue(e.currentTarget.value);
  };

  return (
    <div>
      <input
        onChange={onChange}
        placeholder='찾고 싶은 사람, 전공, 회사명, 기수 등을 검색해보세요'
      />
    </div>
  );
};

export default SearchBar;
