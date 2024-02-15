//Importamos dependencias
const express = require("express");
const router = express.Router();

//cargar el controlador
const ArticuloController = require("../controllers/articulos");


//rutas de prueba
router.get("/ruta-de-prueba", ArticuloController.prueba);
router.get("/ruta-de-curso", ArticuloController.curso);


//Ruta Util (crear)
router.post("/crear", ArticuloController.crear);

module.exports = router;