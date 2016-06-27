import mongoose from 'mongoose';
import beautifyUnique from 'mongoose-beautiful-unique-validation';
import Validators from './validators';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'You need to enter an email'],
    validate: Validators.email,
    // This string is parsed by `mongoose-beautiful-unqiue-validation`
    // to be the unique constraint error message
    unique: 'Sorry, this email is already taken'
  },
  facebookId: {
    type: String
  },
  facebook: {
    type: Schema.Types.Mixed
  },
  fullName: {
    type: String,
    default: ''
  },
  location: {
    lon: {
      type: Number
    },
    lat: {
      type: Number
    }
  },
  onboarded: {
    type: Boolean,
    required: true,
    default: false
  },
  password: {
    type: String,
    required: [true, 'You forgot to enter a password']
  },
  rangeInMiles: {
    type: Number,
    default: 50,
    required: true
  },
  username: {
    type: String,
    validate: Validators.username,
    unique: 'Sorry, this username is taken'
  }
}, {
  timestamps: true
});

// Mongooses' unique constraint returns a MongoDB error, not the regular
// Mongoose validation error, we would expect. This plugin solves that issue.
userSchema.plugin(beautifyUnique);

export default mongoose.model('User', userSchema);
