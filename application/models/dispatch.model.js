/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { MODEL, DISPATCHSTATE } = require('../config/index');
const autoIncrementModelID = require('./Count.model');
// const { Schema } = mongoose;


const DispatchSchema = mongoose.Schema({
  
  droneID: {
    type: String,
  },
  drone: [
    {
      serialNumber: {
        type: String,
      },
      model: {
        type: String,
        ENUM: MODEL,
        default: "LIGHTWEIGHT"
    },
      weightLimit: String,
      state: {
        type: String,
        ENUM: DISPATCHSTATE,
        default:"IDLE"
      },
      batteryCapacity: String,
    },
  ],
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
  autoIncrementModelID('applicationCount', 'droneID', this, next, 'DR');
});

module.exports = mongoose.model('dispatch', DispatchSchema);
