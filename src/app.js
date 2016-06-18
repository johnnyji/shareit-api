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

// Enables a feathers instance
const app = feathers();
const {static: serveStatic} = feathers;

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .options('*', cors())
  .use(cors())
  // Sets the favicon for the app
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  // Uses JSON parser for REST services
  .use(bodyParser.json())
  // Uses URL encoded parser for REST services
  .use(bodyParser.urlencoded({extended: true}))
  // Enables hooks
  .configure(hooks())
  // Enables REST
  .configure(rest())
  // Enables socket.io
  .configure(socketio())
  // Here we're registering all out feathers services
  .configure(services)
  // Adds our own Express-like middleware to our app
  .configure(middleware);

module.exports = app;
