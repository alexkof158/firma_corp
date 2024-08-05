const Feedback = require('../models/Feedback');

require('dotenv').config(); // Para cargar variables de entorno


const crearComment = async (req, res) => {
    const {  name, email, comentario } = req.body;

    // Validar los datos del feedback
    if (!name || !email || !comentario ) {
        return res.status(400).json({ message: 'Faltan datos requeridos' });
    }

    try {
      

        const feedback = new Feedback(req.body);
        await feedback.save();

        return res.status(201).json({
            ok: true,
            msg: 'Comentario creado exitosamente',
            Comentario: feedback
        });
    } catch (error) {
        console.error('Error al crear comentario:', error);
        return res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor. Contacte al administrador.'
        });
    }
};

const deletePost = (req, res) => {
    res.json({
        ok: true,
        msg: 'Post eliminado',
        user: req.body
    });
};

module.exports = {
    crearComment,
    deletePost
};
