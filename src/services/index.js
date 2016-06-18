import message from './message';
import authentication from './authentication';
import user from './user';
import mongoose from 'mongoose';

export default function() {
  const app = this;

  // Allows us to plug in native ES6 Promises in Mongoose
  // instead of using Mongooses' default `mpromise`:
  // http://mongoosejs.com/docs/promises.html
  mongoose.Promise = global.Promise;

  // Connects the mongodb instance found in config/default.json
  // or config/production.json
  mongoose.connect(app.get('mongodb'));

  app.configure(authentication);
  app.configure(user);
  app.configure(message);
}
