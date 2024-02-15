//Importar dependencias
const { connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");
const puerto = 3900;

//prueba de consola
console.log("Hola! 555");

//Conectar base de datos
connection();

//crear servidor node
const app = express();

//configurar cors
app.use(cors());

//convertir body a object js
app.use(express.json()); //recibir datos unicamente del content-type app/json
app.use(express.urlencoded({extended:true})); //middleware que encodifica datos y los pasa a un objeto json (datos de un urlencoded (form))

//crear rutas
const rutas_articulo = require("./routes/articulos");

//cargar las rutas
app.use("/api", rutas_articulo);





//Rutas de prueba hardcoreadas
app.get("/probando", (req, res) => {

    console.log("Se ha ejectuado el endpoint probando");
    return res.status(200).send(`
        <div> 
        <h1>Prueba de ruta probando</h1>
        <p>Creando api rest con Node.js</p>
        </div>
    `)
})

app.get("/probandojson", (req, res) => {

    console.log("Se ha ejectuado el endpoint probandojson");
    return res.status(200).json({
        autor: "Jk.Rowling",
        libro: "Harry Potter",
        year: "1999"
    })
})


//crear servidor (definir un puerto que escuche)
app.listen(puerto, ()=>{
    console.log("servidor corriendo en el puerto "+puerto);
})