import mongoose from 'mongoose';
import beautifyUnique from 'mongoose-beautiful-unqiue-validation';
import Validators from './validators'; 

const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebookId: {
    type: String
  },
  facebook: {
    type: Schema.Types.Mixed
  },
  fullName: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'You need to enter an email'],
    validate: Validators.email
    // This string is parsed by `mongoose-beautiful-unqiue-validation`
    // to be the unique constraint error message
    unique: 'Sorry, this email is already taken'
  },
  onboarded: {
    type: Boolean,
    required: true,
    default: false
  },
  password: {
    type: String,
    required: [true, 'You forgot to enter a password']
  }
}, {
  timestamps: true
});

// Mongooses' unique constraint returns a MongoDB error, not the regular
// Mongoose validation error, we would expect. This plugin solves that issue.
userSchema.plugin(beautifyUnqiue);

export default mongoose.model('User', userSchema);
