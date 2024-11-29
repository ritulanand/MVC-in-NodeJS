// const express = require('express');
import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import path from "path";
// const ProductController = require('./src/controllers/product.controller.js');
const server = express();

// server.get("/", (req, res) => {
//     return res.send('welcome to inventory app')
// })


//setup view engine
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src','views'))

// crerate a instance of productcontroller 
const productcontroller = new ProductController();
server.get('/', (productcontroller.getProducts));

server.use(express.static('src/views'));

server.listen(3400);
console.log('Server is listening on pert 3400');
