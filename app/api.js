const express = require('express');
const paymentRoute = require('./route/payment');
const app = express();
app.use('/v1', paymentRoute)
module.exports=app;