import { io } from 'socket.io-client';
import React from 'react';

export default function useConnectHooks (func?: any) {
  let socket: any;
  React.useEffect(() => {
    // if (process.env.REACT_APP_SOCKET) {
      // socket = io(process.env.REACT_APP_SOCKET);
      socket = io('ws://localhost:5000');
      socket.on('update', func);
    // }
  }, []);
  return socket;
}
