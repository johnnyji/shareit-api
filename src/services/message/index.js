const hooks = require('./hooks');
const Message = require('./message_model');
const service = require('feathers-mongoose');

export default function() {
  const app = this;

  const options = {
    Model: Message,
    paginate: {
      default: 20,
      max: 100
    }
  };

  // Initialize our service with any options it requires
  app.use('/messages', service(options));

  // Get our initialize service to that we can bind hooks
  const messageService = app.service('/messages');

  // Set up our before hooks
  messageService.before(hooks.before);

  // Set up our after hooks
  messageService.after(hooks.after);
}
