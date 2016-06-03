// The User model
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebookId: {
    type: String
  },
  facebook: {
    type: Schema.Types.Mixed
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);
