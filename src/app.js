import bodyParser from 'body-parser';
import compress from 'compression';
import configuration from 'feathers-configuration';
import cors from 'cors';
import favicon from 'serve-favicon';
import feathers from 'feathers';
import hooks from 'feathers-hooks';
import middleware from './middleware';
import path from 'path';
import rest from 'feathers-rest';
import services from './services';
import socketio from 'feathers-socketio';

const app = feathers();
const {static: serveStatic} = feathers;

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware);

module.exports = app;
