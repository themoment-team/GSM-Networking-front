'use client';

import { useEffect, useMemo, useState } from 'react';
import React from 'react';

import * as I from '@/assets';

const RandomMentorImg = () => {
  const [randomNumber, setRandomNumber] = useState<number>();

  const value = useMemo(() => Math.floor(Math.random() * 5), []);

  useEffect(() => {
    setRandomNumber(value);
  }, [value]);

  switch (randomNumber) {
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
    default:
      return null;
  }
};

export default RandomMentorImg;
