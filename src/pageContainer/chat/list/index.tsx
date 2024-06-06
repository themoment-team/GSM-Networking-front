'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';

import * as S from './style';

import { Header } from '@/components';
import { useSocket } from '@/components';

interface message {
  userId: number;
  content: string;
}

const ChatList = () => {
  const [messages, setMessages] = useState<message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const { socket /*, isConnected*/ } = useSocket();
  const [userId /*, setUserId*/] = useState<number>();

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('message', (data: message) => {
      setMessages((messages) => [...messages, ...[data]]);
    });

    return () => {
      socket.off('message');
    };
  }, [socket, messages]);

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios.post('/api/chat', {
      userId: userId,
      content: currentMessage + '테스트',
    });
    setCurrentMessage('');
  };

  return (
    <>
      <Header />
      <S.Conatiner>
        <S.Text>채팅 목록</S.Text>
        {/* {chatList?.map((i) => <ChattingListCard key={i.opponentUserId}  />)} */}
        <button onClick={sendMessage}>테스트</button>
      </S.Conatiner>
    </>
  );
};

export default ChatList;
