/*
Rutas de comentarios 
host + /api/comments

*/
const express = require('express');
const { crearComment, deletePost } = require('../controllers/comments');

const router = express.Router()

const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');


router.post('/new',
[
check('name', 'El nombre debe ser obligatorio').not().isEmpty(),
check('email', 'El email debe ser obligatorio').isEmail(),
check('comentario', 'El comentario debe ser obligatorio').not().isEmpty(),
validarCampos

] 
,
crearComment)

router.get('/delete', deletePost)


module.exports = router;