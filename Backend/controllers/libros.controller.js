const { response } = require('express');
const  Libro  = require('../models/libros.js');


const getLibros = async(req, res = response ) => {

    const { until = 5, from = 0 } = req.query;
    const query = { state: true };

    const [ total, libros ] = await Promise.all([
        Libro.countDocuments(query),
        Libro.find(query)
            .populate('users', 'username')
            .skip( Number( from ) )
            .limit(Number( until ))
    ]);

    res.json({
        total,
        libros
    });
}

  const getLibro = async(req, res = response ) => {

    const { id } = req.params;
    const  Libro = await  Libro.findById( id )
                            .populate('users', 'username')

    res.json( Libro );

}


const postLibro = async(req, res = response ) => {

    const { estatus, autor, fechaPub,capitulos, ...body } = req.body;

    const LibroDB = await Libro.findOne({ titulo: body.titulo });

    if ( LibroDB ) {
        return res.status(400).json({
            msg: `El Libro ${ LibroDB.titulo }, ya existe`
        });
    }

    // Generar la data a guardar
    const data = {
        ...body,
        titulo: body.titulo.toUpperCase(),
        autor: req.autor._id
    }

    const libroNew = new Libro( data );

    // Guardar DB
    await libroNew.save();

    res.status(201).json(libroNew);

}

const putLibro = async( req, res = response ) => {

    const { id } = req.params;
    const { estatus, autor, fechaPub, ...data } = req.body;

    if( data.titulo ) {
        data.titulo  = data.titulo.toUpperCase();
    }

    data.autor = req.autor._id;

    const Libro = await Libro.findByIdAndUpdate(id, data, { new: true });

    res.json( Libro );

}

const deleteLibro = async(req, res = response ) => {

    const { id } = req.params;
    const LibroDeleted = await Libro.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( LibroDeleted );
} 

module.exports = {
    getLibros,
    getLibro,
    postLibro,
    putLibro,
    deleteLibro  
}