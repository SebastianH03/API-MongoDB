//Importamos dependencias (con esto se crea modelos en mongoose)
const { Schema, model } = require("mongoose");

//Definir la estructura del modelo
const ArticuloSchema = Schema({
    titulo: {
        type: String,
        require: true
    },
    contenido: {
        type: String,
        require: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String,
        default: "default.png"
    }
});

//Lo exportamos (este modelo es el molde de mis articulos)
module.exports = model("Articulo", ArticuloSchema, "articulos");
