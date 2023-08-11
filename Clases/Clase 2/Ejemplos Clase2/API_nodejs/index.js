/*
    instalar paquetes: 
        npm install express
*/

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('dev'));

const usuarios = [
    { id: 1, name: 'Usuario 1' },
    { id: 2, name: 'Usuario 2' },
    { id: 3, name: 'Usuario 3' },
    { id: 4, name: 'Usuario 4' },
    { id: 5, name: 'Usuario 5' },
];

// Configuración para poder recibir y parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({
    mensaje: "Bienvenido API NODEJS"
  })
});

app.get('/data',(req,res)=>{
    /*res.json({
        carnet: 201801268,
        nombre: "Jhonathan Daniel Tocay Cotzojay"
    })*/

    res.json({
        carnet: 0,
        nombre: "Nombre estudiante"
    })
})

app.get('/usuarios',(req,res)=>{
    res.json(usuarios)
})

app.get('/usuario/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const usuario = usuarios.find((user) => user.id === userId);
    if (!usuario) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      res.json(usuario);
    }
  });
  
// Escuchando en el puerto especificado
app.listen(port, () => {
  console.log(`El Servidor esta corriendo en http://localhost:${port}`);
});