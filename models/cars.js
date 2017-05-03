'use strict'
let mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let CarSchema = new Schema ({
	year: Number,
	make: String,
	model: String,
	picture: String,
	movie: String
});

// Car Model
let Car = mongoose.model('Car', CarSchema);

// export
module.exports = Car;