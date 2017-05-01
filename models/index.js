'use strict'
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bond-cars');

module.exports.Car = require('./cars.js');