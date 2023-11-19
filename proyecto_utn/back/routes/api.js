var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
// const { error } = require('console');

// var util = require('util');
var cloudinary = require('cloudinary').v2;


/* GET home page. */
router.get('/novedades', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.id_img) {
            const imagen = cloudinary.url(novedad.id_img, {
                width: 600,
                height: 500,
                crop: 'fill' // pad
            });
            return {
                ...novedad,
                imagen
            };
        }
        else {
            return {
                ...novedad,
                imagen: "sin_imagen_disponible.jpg"
            }
        }

    });

    res.json(novedades);

});

module.exports =router;