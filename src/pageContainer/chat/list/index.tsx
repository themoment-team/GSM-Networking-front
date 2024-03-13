'use client';

import { useEffect, useRef } from 'react';

import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import * as S from './style';

import { Header } from '@/components';

import type { Client, CompatClient } from '@stomp/stompjs';

const ChatList = () => {
  const client = useRef<Client | CompatClient | null>(null);

  useEffect(() => {
    const sock = new SockJS('https://server.gsm-networking.com:8080/ws', {
      withCredentials: true,
    });
    client.current = Stomp.over(() => sock);

    client.current.connectHeaders = {};
    client.current.onConnect = () => {
      // client.current.subscribe('/query/header', (message) => {
      // });
    };

    client.current.activate();
  }, []);
  return (
    <>
      <Header />
      <S.Conatiner>
        <S.Text>채팅 목록</S.Text>
      </S.Conatiner>
    </>
  );
};

export default ChatList;
