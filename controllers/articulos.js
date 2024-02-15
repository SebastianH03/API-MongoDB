//Importamos libreria de validacion
const validator = require("validator");
const Articulo = require("../models/Articulos");

const prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "Soy una accion de prueba en mi controlador de artículos"
    });
}

const curso = (req, res) => {
    console.log("Se ha ejectuado el endpoint probando");
    return res.status(200).send(`
        <div> 
        <h1>Prueba de ruta curso</h1>
        <p>Creando api rest con Node.js (temática de curso)</p>
        </div>
    `)
}

const crear = (req, res) => {
    
    //recoger parametros post a guardar
    let parametros = req.body;
    //validar datos
    try{

        let validar_titulo =  !validator.isEmpty(parametros.titulo) && 
                                validator.isLength(parametros.titulo, {min:5, max: 40});
        let validar_contenido = !validator.isEmpty(parametros.titulo);
        
        if(!validar_titulo || !validar_contenido){
            throw new Error("No se ha validado la información!");
        }

    }catch(error){
        return res.status(400).json({
            status: "error",            
            mensaje: "Faltan datos por enviar"
        });
    }
    //crear el objeto a guardar

    //Asignar valores al objeto basado en el modelo
    
    //Guardar articulo en la base de datos

    //devolver el resultado
    return res.status(200).json({
        mensaje: "Acción de Guardar",
        parametros
    })
}

module.exports = {
    prueba,
    curso,
    crear
}