'use client';

import { useEffect, useRef } from 'react';

import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import * as S from './style';

import { Header } from '@/components';
import { getSessionId } from '@/utils';

import type { Client } from '@stomp/stompjs';

const ChatList = () => {
  const client = useRef<Client | null>(null);

  useEffect(() => {
    const sock = new SockJS('https://server.gsm-networking.com:8080/ws');
    client.current = Stomp.over(() => sock);

    client.current.connectHeaders = {
      access_token:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMyIsInRva2VuVHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNzEwNTk5NjQwLCJleHAiOjE3MTA2MTA0NDB9.iqmkFjdPkTpPLE4UCfhmFfwqYQw0wXoDJUNtL7kU0UM',
    };
    client.current.onConnect = () => {
      console.log(getSessionId(sock));
      client.current?.subscribe(
        `/queue/user/${getSessionId(sock)}`,
        (message) => {
          console.log(message);
        }
      );
      // client.current.subscribe('/query/header', (message) => {
      // });
    };

    client.current.activate();

    return () => {
      client.current?.deactivate();
    };
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
