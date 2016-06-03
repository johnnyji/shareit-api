// import globalHooks from '../../../hooks';
import hooks from 'feathers-hooks';
import feathersAuthentication from 'feathers-authentication';

const {hooks: authHooks} = feathersAuthentication;


exports.before = {
  all: [],
  find: [
    authHooks.verifyToken(),
    authHooks.populateUser(),
    authHooks.restrictToAuthenticated()
  ],
  get: [
    // Verifys the JWT
    authHooks.verifyToken(),
    // Populates the the User object based on the id
    authHooks.populateUser(),
    // Makes sure the user is authenticated
    authHooks.restrictToAuthenticated(),
    // Only allows the user to retrieve resources owned by them
    authHooks.restrictToOwner({ownerField: '_id'})
  ],
  create: [
    authHooks.hashPassword()
  ],
  update: [
    authHooks.verifyToken(),
    authHooks.populateUser(),
    authHooks.restrictToAuthenticated(),
    authHooks.restrictToOwner({ownerField: '_id'})
  ],
  patch: [
    authHooks.verifyToken(),
    authHooks.populateUser(),
    authHooks.restrictToAuthenticated(),
    authHooks.restrictToOwner({ownerField: '_id'})
  ],
  remove: [
    authHooks.verifyToken(),
    authHooks.populateUser(),
    authHooks.restrictToAuthenticated(),
    authHooks.restrictToOwner({ownerField: '_id'})
  ]
};

exports.after = {
  // Makes sure that we're not sending the user's password to the
  // client
  all: [hooks.remove('password')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};