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
    required: true,
    index: true
  },
  body: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Message', messageSchema);