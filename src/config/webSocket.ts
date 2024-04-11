import { Server } from 'socket.io';
import { type Server as HttpServer } from 'http';

let wsServer: Server | null = null;

function initSocket(server: HttpServer) {
  wsServer = new Server(server, {
    cors: {
      origin: process.env.BASE_URL_FRONT
    }
  });

  wsServer.on('connection', (socket) => {
    socket.on('message', (message) => {
      wsServer?.emit('message', {
        message
      });
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
