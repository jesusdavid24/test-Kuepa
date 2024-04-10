import server from './config/server';
import initSocket from './config/webSocket';
import 'dotenv/config';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv');
}

initSocket(server);

const PORT = process.env.PORT ?? 3001;

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
