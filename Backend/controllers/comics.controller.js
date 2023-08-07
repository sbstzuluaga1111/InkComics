const { response } = require('express');
const  Comic  = require('../models/comics.js');


const getComics = async(req, res = response ) => {

    const { until = 5, from = 0 } = req.query;
    const query = { state: true };

    const [ total, Comics ] = await Promise.all([
        Comic.countDocuments(query),
        Comic.find(query)
            .populate('users', 'username')
            .skip( Number( from ) )
            .limit(Number( until ))
    ]);

    res.json({
        total,
        Comics
    });
}

  const getComic = async(req, res = response ) => {

    const { id } = req.params;
    const  Comic = await  Comic.findById( id )
                            .populate('users', 'username')

    res.json( Comic );

}


const postComic = async(req, res = response ) => {

    const { estatus, autor, fechaPub, capitulos, ...body } = req.body;

    const ComicDB = await Comic.findOne({ titulo: body.titulo });

    if ( ComicDB ) {
        return res.status(400).json({
            msg: `El Comic ${ ComicDB.titulo }, ya existe`
        });
    }

    // Generar la data a guardar
    const data = {
        ...body,
        titulo: body.titulo.toUpperCase(),
        autor: req.autor._id
    }

    const ComicNew = new Comic( data );

    // Guardar DB
    await ComicNew.save();

    res.status(201).json(ComicNew);

}

const putComic = async( req, res = response ) => {

    const { id } = req.params;
    const { estatus, autor, fechaPub, ...data } = req.body;

    if( data.titulo ) {
        data.titulo  = data.titulo.toUpperCase();
    }

    data.autor = req.autor._id;

    const Comic = await Comic.findByIdAndUpdate(id, data, { new: true });

    res.json( Comic );

}

const deleteComic = async(req, res = response ) => {

    const { id } = req.params;
    const ComicDeleted = await Comic.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( ComicDeleted );
} 

module.exports = {
    getComics,
    getComic,
    postComic,
    putComic,
    deleteComic  
}