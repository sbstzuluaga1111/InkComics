const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./db'); // Asegúrate de que la ruta sea correcta
const MainModel = require('./mainModel'); // Asegúrate de que la ruta sea correcta
const path = require('path');
const multer = require('multer');

// Configuración de Multer para manejar la carga de imágenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Directorio donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Renombra la imagen con una marca de tiempo para evitar conflictos
  },
});
const upload = multer({ storage: storage });

// Parsea el contenido del formulario enviado
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Ruta pública para servir las imágenes

// Ruta para manejar la solicitud POST del formulario para subir la imagen
app.post('/formulario', upload.single('imagen'), async (req, res) => {
  try {
    // Extrae los datos enviados desde el formulario
    const { field1, field2 } = req.body;

    // Crea un nuevo objeto del esquema A con la URL de la imagen
    const mainObject = new MainModel({
      field1: field1,
      field2: field2,
      imageUrl: req.file ? '/images/' + req.file.filename : '', // Guarda la URL de la imagen
    });

    // Guarda el objeto A en la base de datos
    const savedMainObject = await mainObject.save();

    res.send('Imagen subida y objeto A guardado con éxito');
  } catch (error) {
    console.error('Error al subir la imagen y guardar el objeto A:', error);
    res.status(500).send('Error al subir la imagen y guardar el objeto A');
  }
});

// Escucha las solicitudes en un puerto específico
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
