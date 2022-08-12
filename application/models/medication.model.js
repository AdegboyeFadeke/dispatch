/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const autoIncrementModelID = require('./Counter.model');
// const { Schema } = mongoose;


const DispatchSchema = mongoose.Schema({
  
  medicationID: {
    type: String,
  },
  drone:
    {
        type: Schema.Types.ObjectId,
        ref: 'dispatch',
        required: true,
    },
  medication: {
    name: String,
    weight: String,
    code: String,
    image: Array,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});
DispatchSchema.pre('find', function () {
  this.where({ deleted: false });
});
DispatchSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelID('applicationCount', 'medicationID', this, next, 'MD');
});

module.exports = mongoose.model('dispatch', DispatchSchema);
