//instanciamos mongoose.
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
//esquema de pagos, llamado
const paymentSchema = new mongoose.Schema({
         userBuy:{
           type:String
         },
         userBuyer: {
         type: String
        },
          cardBuy: {
          type: String
        },
        dateBuy: {
          type: String
        },
        cvvBuy: {
          type: String
        },
        calleBuy: {
          type: String
        },
        esquinaBuy: {
          type: String
        },
        numeroBuy: {
          type: String
        },
        country:{
          type:String
        },
        price:{
          type:String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
//para utilizar la paginacion de mongoose en este schema.

paymentSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('payment',paymentSchema)
