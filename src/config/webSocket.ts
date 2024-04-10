import { Server } from 'socket.io';
import { type Server as HttpServer } from 'http';

let wsServer: Server | null = null;

function initSocket(server: HttpServer) {
  wsServer = new Server(server, {
    cors: {
      origin: 'http://localhost:5173'
    }
  });

  wsServer.on('connection', (socket) => {
    console.log('connection');

    socket.on('disconnet', () => {
      console.log('user disconnected');
    });
  });
}

export function getWsClient() {
  if (!wsServer) {
    throw new Error();
  }

  return wsServer;
}

export default initSocket;
