'use client';

import React from 'react';

import * as I from '@/assets';

interface Props {
  defaultImgNumber: number;
}

const RandomMentorImg: React.FC<Props> = ({ defaultImgNumber }) => {
  switch (defaultImgNumber) {
    case 0:
      return <I.PersonImg0 />;
    case 1:
      return <I.PersonImg1 />;
    case 2:
      return <I.PersonImg2 />;
    case 3:
      return <I.PersonImg3 />;
    case 4:
      return <I.PersonImg4 />;
    case 5:
      return <I.PersonImg5 />;
    default:
      return null;
  }
};

export default RandomMentorImg;
