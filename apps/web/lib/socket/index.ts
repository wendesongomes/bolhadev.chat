const URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'ws://localhost:3001/';

export const socket = () => {
  return new WebSocket(URL!);
};
