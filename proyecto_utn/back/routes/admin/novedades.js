var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
const { error } = require('console');


/* GET home page. */
router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();
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
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedades(req.body);
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
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');
});


// para que me traiga el diseño con una sola novedad cargada buscando por ID para poder modificarla
router.get('/modificar/:id', async(req, res, next)=>{
    var id = req.params.id;
    console.log(id);
    var novedades = await novedadesModel.getNovedadesById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedades
    })
});

router.post('/modificar', async(req, res, next)=>{
try {
    var id = req.body.id;
    var obj = {
        titulo : req.body.titulo,
        subtitulo : req.body.subtitulo,
        cuerpo : req.body.cuerpo
    } 
    console.log(obj);
    await novedadesModel.modificarNovedadesById(obj,id);
    res.redirect('/admin/novedades');
    
} catch (error) {
    console.log(error);
    res.render('admin/modificar',{
        layout : 'admin/layout',
        error: true,
        message : 'No se pudo modificar la novedad.'
    })
}
});


module.exports = router;