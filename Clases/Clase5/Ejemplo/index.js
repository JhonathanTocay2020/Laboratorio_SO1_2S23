const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3300;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const usuarios = [
    { carnet: "2020", nombre:"Usuario 1"},
    { carnet: "2020", nombre:"Usuario 2"},
    { carnet: "2020", nombre:"Usuario 3"},
    { carnet: "2020", nombre:"Usuario 4"}
]
app.get("/",(req, res)=>{
    res.json({
        mensaje: "Api en NODEJS"
    })
})

app.get("/data",(req, res)=>{
    res.json({
        carnet: "2333223",
        nombre: "Jhonathan Tocay"
    })
})

app.get("/usuarios",(req, res)=>{
    res.json(usuarios)
})

app.post("/Agregar", (req, res) => {
    const nuevoUsuario = req.body; // Obtén el nuevo usuario del cuerpo de la solicitud

    if (!nuevoUsuario || Object.keys(nuevoUsuario).length === 0) {
        res.status(400).json({ mensaje: "El Json no puede estar vacío" });
    } else {
        usuarios.push(nuevoUsuario);
        res.json({ mensaje: "Usuario agregado correctamente" });
    }
});

app.listen(port, ()=>{
    console.log("El Servidor esta corriendo en el puerto " + port)
})