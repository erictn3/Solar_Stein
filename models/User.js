const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'Email is required',
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },

  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    //validate: [({ length }) => length >= 8, 'Password must be at least 8 characters']
    minLength: [4, 'Password must be at least 4 characters']
    //maxLength: 24
  },

  jobOpportunities: [
    {
      type: Schema.Types.ObjectId,
      ref: 'JobOpportunity'
    }
  ],

  createdDate: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema, 'users'); // 3rd argument is the name of collection to be created in the DB

module.exports = User;
