const express = require('express')
const myController = require('../controller/payment')
const route = express.Router()
const paymentModel = require('../models/payment')
const path = 'payment'

async function getPayment(req, res) {
    //find consulta en mongo db
    //lean convierte los resultados en objetos planos de javascript
    //exec devuelve la promesa
const payments = await paymentModel.find().lean().exec()
res.status(200).send({payments})
}


async function addPayment(req, res) {
    try {
        const {
            userBuy,
            userBuyer,
            cardBuy,
            dateBuy,
            cvvBuy,
            calleBuy,
            esquinaBuy,
            numeroBuy,
            country,
            price
        } = req.body

        const paymentmodel = await paymentModel({
            userBuy,
            userBuyer,
            cardBuy,
            dateBuy,
            cvvBuy,
            calleBuy,
            esquinaBuy,
            numeroBuy,
            country,
            price
        })

        const paymentStored = paymentmodel.save()
        res.status(201).send({ paymentStored })
    } catch (e) {
        res.status(500).send({ message: e.message })

    }

}

route.get(`/${path}`, getPayment)

route.post(`/${path}`, addPayment);
//exportando el modulo podemos utilizar este modulo en otros archivos.
module.exports = route;