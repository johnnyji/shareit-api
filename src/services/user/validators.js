import isEmail from 'validator/lib/isEmail';

// These are the custom validators used by the User model
export default {

  // Validates for correct email format
  email: {
    validator: (email) => isEmail(email),
    message: '{VALUE} is not a valid email'
  }

};