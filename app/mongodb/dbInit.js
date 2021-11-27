//llamado de mongoose.
const mongoose = require('mongoose');

//punto de entrada(sirve para conectarnos).
//Es necesario tener instalado mongoodb en la computadora.
const DB_URI = `mongodb+srv://jap2021:8ip0BtfNazHjeVHI@cluster0.hr4q1.mongodb.net/e-commerce?retryWrites=true&w=majority`

//exportar la conexión.
module.exports = () => {

    const connect = () => {
        mongoose.connect(
            //"url" de nuestra db.
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true

            },
            //callback.
            (err) => {
                if (err) {
                    console.log('DB: ERROR')
                } else {
                    console.log('conexion correcta')
                }
            }
        )

    }
    //inicializa la conexión para cuando sea importada.
    connect()
}
