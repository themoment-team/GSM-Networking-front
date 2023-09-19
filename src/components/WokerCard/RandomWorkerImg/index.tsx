'use client';

import * as S from './style';

import * as I from '@/assets';

const RandomWorkerImg = () => {
  const randomNumber = Math.floor(Math.random() * 5);
  let personImage;

  switch (randomNumber) {
    case 0:
      personImage = <I.PersonImg0 />;
      break;
    case 1:
      personImage = <I.PersonImg1 />;
      break;
    case 2:
      personImage = <I.PersonImg2 />;
      break;
    case 3:
      personImage = <I.PersonImg3 />;
      break;
    case 4:
      personImage = <I.PersonImg4 />;
      break;
  }

  return (
    <>
      <S.WorkerImgBox>{personImage}</S.WorkerImgBox>
    </>
  );
};

export default RandomWorkerImg;
