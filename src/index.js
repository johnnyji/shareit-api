/* eslint-disable no-console */
import app from './app';

const port = app.get('port');
const server = app.listen(port);

server.on('listening', () => {
  console.info(`Feathers application started on ${app.get('host')}:${port}`);
});
/* eslint-enable no-console */
