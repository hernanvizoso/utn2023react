var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
const { error } = require('console');

var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);
var destroy = util.promisify(cloudinary.uploader.destroy);


/* GET home page. */
router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.id_img) {
            const imagen = cloudinary.image(novedad.id_img, {
                width: 100,
                height: 100,
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
                imagen: 'sin imagen'
            }
        }

    });

    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
    });
});

router.get('/agregar', function (req, res, next) {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});


router.post('/agregar', async (req, res, next) => {

    try {
        var id_img = '';

        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            id_img = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedades({
                ...req.body, // traigo titulo, subtitulo, cuerpo
                id_img
            });
            res.redirect('/admin/novedades')
        } else {
            console.log(obj)
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }

    } catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo la novedad'
        })
    }
})

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    let novedad = await novedadesModel.getNovedades(id);
    if (novedad.id) {
        await (destroy(novedad.id_img));
    }
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');
});


// para que me traiga el diseño con una sola novedad cargada buscando por ID para poder modificarla
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    console.log(id);
    var novedades = await novedadesModel.getNovedadesById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedades
    })
});

router.post('/modificar', async (req, res, next) => {
    try {
        let id_img = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            id_img = null,
                borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                id_img = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }



        var id = req.body.id;
        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            id_img
        }
        console.log(obj);

        await novedadesModel.modificarNovedadesById(obj, id);
        res.redirect('/admin/novedades');


    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se pudo modificar la novedad.'
        })
    }
});


module.exports = router;