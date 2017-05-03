'use strict'
// declaring express, body parser, PORT
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
// const port = process.env.PORT || 3000;

// body parser for use on response
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// public views
app.use(express.static(__dirname + '/public'));

// HTML Endpoint
app.get('/', function home(req,res){
	res.sendFile(__dirname + '/index.html');
});

// DB Route
let db = require('./models');

// GET ALL
app.get('/cars', (req,res)=>{
	db.Car.find()
	.exec((err,cars)=>{
		if(err){
			console.log("Get error: ",err);
		}
		res.json(cars);
	});
});

// SHOW
app.get('/cars/:id', (req,res)=>{
	db.Car.findOne({_id: req.params.id}, (err, data)=>{
		if(err){
			console.log("Show errror: ",err);
		}
		res.json(data);
	});
});

// POST
app.post('/cars', (req,res)=>{
	let newCar = new db.Car({
		year: req.body.year,
		make: req.body.make,
		model: req.body.model,
		picture: req.body.picture
	});
	newCar.save((err,car)=>{
		if(err){
			console.log("Save Error: ",err);
		}
		res.json(car);
	});
});

// DELETE
app.delete('/cars/:id', (req,res)=>{
	db.Car.remove({_id: req.params.id}, (err,deletedCar)=>{
		if(err){
			console.log("Delete Error: ", err);
		}
		res.json("yoooo");
	});
});

// PUT
app.put('/cars/:id', (req,res)=>{
	db.Car.findOne({_id: req.params.id}, (err, foundCar)=>{
		if (err){
			console.log("Update Error: ", err);
		}
		foundCar.id = req.params.id;
		foundCar.year = req.body.year;
		foundCar.make = req.body.make;
		foundCar.model = req.body.model;
		foundCar.picture = req.body.picture;
		foundCar.save((err, car)=>{
			if (err){
				console.log("Update Save Error: ", err);
			}
			console.log('Updated ', car.model);
			res.json(car);
		});
	});
});


// Server
app.listen(process.env.PORT || 3000, ()=>{
	console.log("Server Running on PORT:3000");
});