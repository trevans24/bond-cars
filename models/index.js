'use strict'
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 
				process.env.MONGOLAB_URI || 
                process.env.MONGOHQ_URL ||
                'mongodb://localhost/bond-cars');

module.exports.Car = require('./cars.js');