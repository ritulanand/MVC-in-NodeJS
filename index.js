// const express = require('express');
import express from 'express';
import ProductController from './src/controllers/product.controller.js';

// const ProductController = require('./src/controllers/product.controller.js');
const server = express();

// server.get("/", (req, res) => {
//     return res.send('welcome to inventory app')
// })

// crerate a instance of productcontroller 
const productcontroller = new ProductController();
server.get('/', (productcontroller.getProducts));

server.use(express.static('src/views'));

server.listen(3400);
console.log('Server is listening on pert 3400');
