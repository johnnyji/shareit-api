import hooks from './hooks';
import service from 'feathers-mongoose';
import UserModel from './user_model';

export default function() {
  const app = this;

  // The User service options
  const options = {
    Model: UserModel,
    // paginate: {
    //   // When limit is present, instead of returning an array, the query will
    //   // instead return an object containing:
    //   // {
    //   //   "total": "<total number of records>",
    //   //   "limit": "<max number of items per page>",
    //   //   "skip": "<number of skipped items (offset)>",
    //   //   "data": [/* data */]
    //   // }
    //   default: 5,
    //   // This is the maximum number of allowed items per page, even if the
    //   // `$limit` param in the query is higher
    //   max: 25
    // },
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/users', service(options));

  // Get our initialize service to that we can bind hooks
  const userService = app.service('/users');

  // Set up our before hooks
  userService.before(hooks.before);

  // Set up our after hooks
  userService.after(hooks.after);
}