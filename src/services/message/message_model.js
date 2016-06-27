import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  // A message must have been created by a user
  _creator: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true
  },
  // A message belongs in a channel
  _channel: {
    type: Schema.Types.ObjectId,
    index: true
  },
  // This will only be present if the message with a private conversation between two users
  _recepient: {
    type: Schema.Types.ObjectId,
    index: true
  },
  body: {
    type: String,
    required: true
  },
  location: {
    lat: {
      type: Number,
      required: [true, 'Unable to get your location properly']
    },
    lon: {
      type: Number,
      required: [true, 'Unable to get your location properly']
    }
  }
}, {
  timestamps: true
});

export default mongoose.model('Message', messageSchema);
