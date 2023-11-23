var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var nodemiler = require('nodemailer');
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

router.post('/contacto', async (req, res)=>{
    const mail={
        to: 'hernan.vizoso@gmail.com',
        subject: 'Contacto WEB',
        html: `${req.body.nombre} se contacta a traves de la web
              y quiere mas informacion a este correo: ${req.body.email} <br>
              Ademas hizo el siguiente comentario: ${req.body.mensaje} <br>
              Su telefono es: ${req.body.telefono}`
    }

    const transport = nodemiler.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMPT_PORT,
        auth: {
             user: process.env.SMTP_USER,
             pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error:false,
        message: 'Mensaje enviado.'
    })

});

module.exports =router;