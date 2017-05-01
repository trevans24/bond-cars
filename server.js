'use strict'
// declaring express, body parser, PORT
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// body parser for use on response
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// public views
app.use(express.static(__dirname + '/public'));

// HTML Endpoint
app.get('/', function home(req,res){
	res.sendFile(__dirname + '/index.html');
});

// Server
app.listen(port, ()=>{
	console.log("Server Running on PORT:3000");
});