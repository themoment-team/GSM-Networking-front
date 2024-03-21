'use client';

import { useEffect, useRef } from 'react';

import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import * as S from './style';

import { Header } from '@/components';
import { authUrl, get } from '@/libs';
import type { TokenType } from '@/types';
import { getSessionId, getMyId } from '@/utils';

import type { Client } from '@stomp/stompjs';

const ChatList = () => {
  const client = useRef<Client | null>(null);

  useEffect(() => {
    const connect = async () => {
      const sock = new SockJS('https://server.gsm-networking.com:8080/ws');
      client.current = Stomp.over(() => sock);
      const { accessToken } = await get<TokenType>(authUrl.getMyToken());

      client.current.connectHeaders = {
        access_token: accessToken,
      };
      client.current.heartbeatOutgoing = 2000;

      client.current.onConnect = async (frame) => {
        const userId = await getMyId();

        // console.log(userId);
        // const encoder = new TextEncoder();
        // const binaryData = encoder.encode(
        //   JSON.stringify({
        //     userId: userId,
        //     epochMilli: Date.now(),
        //     limit: 5,
        //   })
        // );

        client.current?.subscribe(
          `/queue/user/${getSessionId(sock)}`,
          (message) => {
            setInterval(() => console.log(message), 3000);
          }
        );

        client.current?.publish({
          destination: '/header/query',
          // binaryBody: binaryData,
          body: JSON.stringify({
            userId: userId,
            epochMilli: Date.now(),
            limit: 5,
          }),
          headers: {
            'content-type': 'application/json',
          },
        });
      };

      client.current.activate();
    };

    connect();

    return () => {
      client.current!.deactivate();
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
