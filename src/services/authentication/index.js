import authentication from 'feathers-authentication';

const FacebookStrategy = require('passport-facebook').Strategy;
const FacebookTokenStrategy = require('passport-facebook-token');

export default function() {
  const app = this;
  const config = app.get('auth');
  
  config.facebook.strategy = FacebookStrategy;
  config.facebook.tokenStrategy = FacebookTokenStrategy;

  app.set('auth', config);
  app.configure(authentication(config));
}
