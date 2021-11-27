// const mongoose = require('mongoose')
// const model = require('../models/payment')
// const options = {
//     page: 1,
//     limit: 10,
//     collation: {
//         locale: 'en',
//     },
// }
// //obtener DATA de pagos.
// exports.getData = (req, res) => {
//     //trae todos los datos contenidos en la "tabla" payment.
//     model.paginate({},options, (err, docs) => {
//         res.send({ items: docs })

//     })
// }

// //insertar DATA de pagos

// exports.insertData = (req, res) => {
//     //obtiene el contenido del body de ..:3020/payment
//     const data = req.body
//     model.create(data, (err, docs) => {
//         if (err) {
//             res.status(422.).send({ error: 'Error' })
//         } else {
//             res.send({ data: docs })
//             console.log({data:docs})
//         }

//     })
// }
