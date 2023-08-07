// Suponiendo que tienes configurado tu servidor con Express
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./db'); // Asegúrate de que la ruta sea correcta
const MainModel = require('./mainModel'); // Asegúrate de que la ruta sea correcta
const SubModel = require('./subModel'); // Asegúrate de que la ruta sea correcta

// Parsea el contenido del formulario enviado
app.use(express.urlencoded({ extended: true }));

// Ruta para manejar la solicitud POST del formulario
app.post('/formulario', async (req, res) => {
  try {
    // Extrae los datos enviados desde el formulario
    const { field1, field2 } = req.body;

    // Crea un nuevo objeto del esquema B con los datos recibidos del formulario
    const newSubObject = new SubModel({
      field1: field1,
      field2: field2,
    });

    // Encuentra el objeto del esquema A al que quieres agregar el nuevo subobjeto
    const mainObjectId = 'ID_DEL_OBJETO_A'; // Reemplaza 'ID_DEL_OBJETO_A' con el ID del objeto A al que quieres agregar el subobjeto
    const mainObject = await MainModel.findById(mainObjectId);

    // Agrega el nuevo subobjeto al array 'subObjects' del objeto A
    mainObject.subObjects.push(newSubObject);

    // Guarda el objeto A actualizado en la base de datos
    const updatedMainObject = await mainObject.save();

    res.send('Nuevo subobjeto agregado con éxito al objeto A');
  } catch (error) {
    console.error('Error al agregar el nuevo subobjeto:', error);
    res.status(500).send('Error al agregar el nuevo subobjeto');
  }
});

// Escucha las solicitudes en un puerto específico
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
