const express = require('express')
//se conecta con el controlador por medio de la ruta.
const myController = require('../controller/carrito')
//new route
const route = express.Router()
const path='carrito'

 route.get(`/${path}`, myController.getData)

 //exportando el modulo podemos utilizar este modulo en otros archivos.
 module.exports=route;