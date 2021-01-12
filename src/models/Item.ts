import { Schema, model } from 'mongoose';

const ItemSchema = new Schema({
  name: String,
  cost: Number,
  value1: Number,
  value2: Number,
  createdAt: {
    type: Date,
    defaultt: Date.now
  }
});

export default model('Item', ItemSchema);