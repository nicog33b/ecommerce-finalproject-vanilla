const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const port = 3020
const db = require('./app/mongodb/dbInit')

//Activa las rutas exportadas desde user.
const userRouterUser = require('./app/route/product')
const userRouterCarrito = require('./app/route/carrito')
const userRouterComments = require('./app/route/comments')
const userRouterRelatedProduct = require('./app/route/relatedProduct')
const userRouterCategory = require('./app/route/category')
const userRouterCategoryInfo = require('./app/route/category-info');

// const userRouterPayment=require('./app/route/payment')

app.use(bodyParser.json({
    limit: '20mb'
})
)

app.use(bodyParser.urlencoded({
    limit: '20mb',
    extended: true
}))

app.use(cors());


app.use(userRouterComments)
app.use(userRouterUser)
app.use(userRouterCarrito)
app.use(userRouterRelatedProduct)
app.use(userRouterCategory)
app.use(userRouterCategoryInfo)
// app.use(userRouterPayment)

const paySchema = {
    userBuyer: String,
    cardBuy: String
}

const pay = mongoose.model("pay", paySchema);

app.get("http://127.0.0.1:3020/carrito"


    , (req, res) => {
        res.sendFile(__dirname + "/cart.html");

    })

app.post("http://127.0.0.1:3020/carrito", (req, res) => {
    let newPay = new pay({
        name: userBuyer,
        count: cardBuy
    })
    newPay.save()
    res.redirect("index")
})




app.listen(port, () => {
    console.log('Node On')
})

db()
