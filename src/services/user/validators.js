import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

// These are the custom validators used by the User model
export default {

  // Validates for correct email format
  email: {
    validator: (email) => isEmail(email),
    message: '{VALUE} is not a valid email'
  },
  
  username: {
    validator: (username) => isLength(username, {min: 3, max: 20}),
    message: 'Your username should be between 3 and 20 chars'
  }

};
