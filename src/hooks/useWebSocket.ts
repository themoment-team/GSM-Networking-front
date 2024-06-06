/* eslint-disable no-console */
import { useEffect, useRef } from 'react';

import type { SendMessage, WebSocketMessageHandler } from '@/types';

const useWebSocket = (
  url: string,
  onMessage: WebSocketMessageHandler
): SendMessage => {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    socketRef.current = socket;
    console.log(1);

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event: MessageEvent) => {
      onMessage(event.data);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, [url, onMessage]);

  const sendMessage: SendMessage = (message: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    } else {
      console.warn(
        'WebSocket is not open. Ready state: ',
        socketRef.current?.readyState
      );
    }
  };

  return sendMessage;
};

export default useWebSocket;
