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
const upload = multer({ storage: storage, fileFilter: imageFilter });

// Función para filtrar solo las imágenes permitidas
function imageFilter(req, file, cb) {
  const allowedExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
  const fileExtension = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error('Tipo de archivo no válido. Solo se permiten imágenes .jpeg, .jpg, .png y .gif'));
  }
}

// Parsea el contenido del formulario enviado
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Ruta pública para servir las imágenes

// Ruta para manejar la solicitud POST del formulario para subir las imágenes
app.post('/formulario', upload.array('images'), async (req, res) => {
  try {
    // Obtén las rutas de las imágenes guardadas en el servidor
    const imagePaths = req.files.map((file) => '/images/' + file.filename);

    // Crea un nuevo objeto del esquema A con las rutas de las imágenes
    const mainObject = new MainModel({
      imageUrls: imagePaths,
    });

    // Guarda el objeto A en la base de datos
    const savedMainObject = await mainObject.save();

    res.send('Imágenes subidas y objeto A guardado con éxito');
  } catch (error) {
    console.error('Error al subir imágenes y guardar el objeto A:', error);
    res.status(500).send('Error al subir imágenes y guardar el objeto A');
  }
});

// Escucha las solicitudes en un puerto específico
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

